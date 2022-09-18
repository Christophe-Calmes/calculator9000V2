import React from 'react';
const GreatOperationButton = (props) => {
  return (
    <div>
      <button className={props.grid} onClick={ ()=>props.addInfoScreen(props.cle) }>{props.signe}</button>
    </div>
  );
}
export default GreatOperationButton
