// Procédure React

import React, { useState, useEffect } from 'react';
// Logique affichages
import MagnificientEqualButton from './magnificientEqualButton.js';
import AmazingNumberButton from './AmazingNumberButton.js';
import GreatOperationButton from './greatOperationButton.js';
import BeautifulScreen from './BeautifulScreen.js';
import Historique from './historique.js';
import ReturnData from './import.js';
import ExportDatas from './export.js';


function Calculator () {
  // Collection addInfoScreen 
  // Déclaration des variables state 
const [InfoScreen, setInfoScreen] = useState([])
const [Xresult, setXresult] = useState(0)
const [Collection, setCollection] = useState([])
const addInfoScreen = (data) => {
  setInfoScreen(InfoScreen => [...InfoScreen, data]);
}


  const actionEgal = () => {
    
    let calculate = '';
        for (let alpha = 0; alpha <InfoScreen.length; alpha++) {
          calculate = calculate + InfoScreen[alpha];
        }
        // Enregistrement de la collection d'ancien calcul.
        const construct = calculate + '=' + eval(calculate);
        setInfoScreen([]);
        setCollection(Collection => [...Collection, construct]);
        // Remise à 0 de InfoScreen

       // console.log(Collection)
      // console.log(eval(calculate))
        setXresult(eval(calculate))
  }


  // Déploiement des opérateurs
  const operator = [{"grid":"add ButtonCal", "value":"+", "signe":"+"},
                  {"grid":"sub ButtonCal", "value":"-", "signe":"-"},
                  {"grid":"mult ButtonCal", "value":"*", "signe":"*"},
                  {"grid":"div ButtonCal", "value":"/", "signe":"/"}];

  const ButtonOperator = operator.map((ind, i)=>
    <GreatOperationButton
      key={i}
      grid={ind.grid}
      cle={ind.value}
      signe={ind.signe}
      addInfoScreen = {addInfoScreen}
    />
  );
  // Déploiement des boutons numérique
  const numbers = [{"grid": "Zero ButtonCal", "key":0, "number": 0},
                  {"grid": "Un ButtonCal", "key":1, "number": 1},
                  {"grid": "Deux ButtonCal", "key":2, "number": 2},
                  {"grid": "Trois ButtonCal", "key":3, "number": 3},
                  {"grid": "Quatre ButtonCal", "key":4, "number": 4},
                  {"grid": "Cinq ButtonCal", "key":5, "number": 5},
                  {"grid": "Six ButtonCal", "key":6, "number": 6},
                  {"grid": "Sept ButtonCal", "key":7, "number": 7},
                  {"grid": "Huit ButtonCal", "key":8, "number": 8},
                  {"grid": "Neuf ButtonCal", "key":9, "number": 9}]

  const Button = numbers.map((index, i)=>
  <AmazingNumberButton 
    key={i}
    grid={index.grid}
    cle={index.key}
    number={index.number}
    addInfoScreen = {addInfoScreen}
     />
);
// Import data depuis l'API 
useEffect (() => {
  async function loadData () {
      var datasAPI = await fetch('http://localhost/apicalc/export.php')
      var response = datasAPI.json();
      // Remplace le tableau courant par les donnéees issue de l'API.
      setCollection({ datasAPI });
  }
  loadData()
}, []);
// Exporter les datas vers l'API
function ExportData () {
  await fetch('http://localhost/apicalc/import.php', {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-urlencoded'},
    body: Collection.json();
  })
  .then(response => response.json())
  .then(data => this.setCollection({ data }));
}

// Retour du clavier et des opérateurs
// Its Over 9000 marche en + et -
  return (
    <div>
      <section>
        <ReturnData 
          importData = {importData}
          lastOperator = {Collection}
          />
      </section>
      <section>
        <ExportDatas 
          importData = {ExportData}
        />
      </section>

      <section>
        {Math.abs(Xresult) > 9000 &&(<p>“It’s Over +9000 or -9000 !!!”</p>)}
      <Historique
      lastOperator = {Collection}
      />  
      <aside className="Screen">
        <BeautifulScreen
          operateur = {InfoScreen}
          affichage = {Xresult} 
        />
      </aside>
      <article className="calque">
        {Button}
        {ButtonOperator}
        <MagnificientEqualButton 
          clickEgal = {actionEgal} 
        />
        </article>
      </section>
    </div>
  );
}
 export default Calculator
