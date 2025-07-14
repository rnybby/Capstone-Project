import React, {useState} from 'react';

function VINForm({onSearch}){
    const [vin,setVin] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        if(vin.length === 17){
            onSearch(vin);
        } else{
            alert('Please enter a 17-character VIN.');
        }
    }
    return(
        <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={vin}
              onChange={(e)=>setVin(e.target.value)}
              plcaeholder="Enter VIN (17 Character)"
            />
            <button type="submit">Decode</button>
        </form>
    );
}

export default VINForm;
