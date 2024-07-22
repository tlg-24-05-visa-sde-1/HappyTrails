import React from 'react';
import { useLocation } from 'react-router-dom';
import Trails from './Trails';
import Alert from './Alert';
import Location from './MapLocation';
import Weather from './Weather';

function ParkInformation({ selectedParkName }) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  
  const parkName = queryParams.get('parkName') || selectedParkName; 
  const latitude = queryParams.get('latitude');
  const longitude = queryParams.get('longitude');

  console.log("Received state:", { parkName, latitude, longitude });

  return (
    <div>
      <h1>{parkName || 'Park Name'}</h1>
      <Trails selectedParkName={parkName} />
      <Alert selectedParkName={parkName} />
      <Location selectedParkName={parkName} />
      <Weather selectedParkName={parkName} latitude={latitude} longitude={longitude} />
    </div>
  );
}

export default ParkInformation;
