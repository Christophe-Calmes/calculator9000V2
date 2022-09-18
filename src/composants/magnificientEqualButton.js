import React from 'react';

const MagnificientEqualButton = (props) => {
    return (
        <div>
            <button className="ButtonCal" onClick={ ()=>props.clickEgal() }>=</button>
        </div>
    );
}
export default MagnificientEqualButton