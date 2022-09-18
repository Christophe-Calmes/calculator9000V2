import React from 'react';

const ExportDatas = (props) => {
    return (
        <div>
            <button className="ButtonCal" onClick={ ()=>props.ExportData() }>Exporter</button>
        </div>
    );
}
export default ExportDatas