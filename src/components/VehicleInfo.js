import React from 'react';

function VehicleInfo({vehicleData}){
    if(!vehicleData || vehicleData.length === 0){
        return null;
    }

    return(<div>
        <h2>Vehicle Details</h2>
        <ul>
            {vehicleData.map((item,index) => (item.Value && (<li key={index}>
                <strong>{item.Variable}:</strong> {item.Value}
            </li>
            )
            ))}
        </ul>
    </div>);

}

export default VehicleInfo;

