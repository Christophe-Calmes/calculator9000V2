import React from 'react';
const AmazingNumberButton = (props) => {
  return (
   <div className = 'container'>
    <button className={props.grid} onClick={ ()=>props.addInfoScreen(props.cle) }>{props.number}</button>
   </div>
  );
}
export default AmazingNumberButton;
