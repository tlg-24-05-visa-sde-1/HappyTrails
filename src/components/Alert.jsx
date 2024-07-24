import { useState, useEffect } from "react";

function Alert({selectedParkName}) {
  const [alerts, setAlerts] = useState('')
  const apiKey = "rQFVeKbyGrH0GHgz3zLuq0WUDjincXRNQ1feSooG"


  useEffect(() =>{ 
    if(selectedParkName){
      fetch(`https://developer.nps.gov/api/v1/alerts?parkName=${encodeURIComponent(selectedParkName)}&api_key=${apiKey}`)
      .then(response => response.json())
      .then(data => setAlerts(data.data))
      .catch(error => console.error('Cannot fetch alerts:', error))
    }
  }, [selectedParkName])

  return (
    <div>
      <h2>Alerts for {selectedParkName}</h2>
      {alerts.length > 0 ? (
        <ul>
          {alerts.map(alert => (
            <li key={alert.id}>
              <h3>{alert.title}</h3>
              <p>{alert.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No alerts available or loading alerts data...</p>
      )}
    </div>
  );
}


export default Alert