import React from 'react';

const Historique = (props) => {
    // Afficher les dernières opérations
    //console.log(props.lastOperator.length)
var arrayOperator = []
    if (props.lastOperator.length > 0){
        /*or (let j = 0; j < props.lastOperator.length; j++) {
        arrayOperator.push(<li>{props.lastOperator[j]}</li>);
        }*/
        let Ak = 0
    arrayOperator = props.lastOperator.map((liste, cle_Primaire) => 
    <li key={cle_Primaire}>{liste}</li>);
       
    } else {
        arrayOperator = 'Pas encore d\'opération disponible'
    }
        return (
            <div>
                <ul>
                    {arrayOperator}
                </ul>
            </div>
        );
}

export default Historique