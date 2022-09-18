import React from 'react';

const BeautifulScreen = (props) => {

    function logique(array) {
        let calculate = ''
        for (let alpha = 0; alpha <array.length; alpha++) {
            calculate = calculate + array[alpha];
          }
        return (calculate);
    }
    return (
        <div>
            <p>Operation : {logique(props.operateur)}</p>
            <p>Resultat : {props.affichage}</p>
        </div>
    );
    }
export default BeautifulScreen