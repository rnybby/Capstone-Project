import React, { useState } from 'react';
import VINForm from './components/VINForm';
import VehicleInfo from './components/VehicleInfo';

function App() {
  const [vehicleData, setVehicleData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchVinData(vin) {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/${vin}?format=json`);
      const data = await res.json();
      setVehicleData(data.Results);
    } catch (err) {
      setError('Failed to fetch data. Please try again.');
    }

    setLoading(false);
  }

  return (
    <div className="App" style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>VINsight</h1>
      <VINForm onSearch={fetchVinData} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <VehicleInfo vehicleData={vehicleData} />
    </div>
  );
}

export default App;

