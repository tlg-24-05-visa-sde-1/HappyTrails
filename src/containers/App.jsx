import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Main from '../components/Main';
import ParkInformation from '../components/ParkInformation';
import './App.css';

function App() {
  const [selectedParkName, setSelectedParkName] = useState(null);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Main setSelectedParkName={setSelectedParkName} />} />
        <Route path="/park-details" element={<ParkInformation selectedParkName={selectedParkName} />} />
      </Routes>
    </div>
  );
}

export default App;
