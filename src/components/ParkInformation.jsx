import React from 'react'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Trails from './Trails'
import Alert from './Alert'
import Location from './MapLocation'
// import {Link} from 'react-router-dom'
import Weather from './Weather'

function ParkInformation({selectedParkName}) {
  // const { parkId } = useParams();
  const location = useLocation();
  const { latitude, longitude } = location.state;


  return (
    <div>
        <h1>{selectedParkName || 'Park Name'}</h1>
        <Trails selectedParkName={selectedParkName}/>
        <Alert selectedParkName={selectedParkName}/>
        <Location selectedParkName={selectedParkName}/>
        <Weather latitude={latitude} longitude={longitude}/>
    </div>

  )
}

export default ParkInformation