import React from 'react';

const ReturnData = (props) => {
    return (
        <div>
            <button className="ButtonCal" onClick={ ()=>props.importData() }>Importer</button>
        </div>
    );
}
export default ReturnData