import { useState, useEffect } from "react";
import axios from "axios";

function Weather({ selectedParkName, latitude, longitude }) {
  const [parkWeather, setParkWeather] = useState({});
  const apiKey = '706154e066a3b7a11e6eb6f59753585b';

  useEffect(() => {
    if (latitude && longitude) {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`)
        .then(response => {
          setParkWeather(response.data);
        })
        .catch(error => {
          console.error("Cannot fetch park weather: ", error);
        });
    }
  }, [latitude, longitude]);

  return (
    <div>
      <h2>Weather in {selectedParkName}</h2>
      {parkWeather.main ? (
        <div>
          <p>Temperature: {parkWeather.main.temp}°F</p>
          <p>Feels Like: {parkWeather.main.feels_like}°F</p>
          <p>Humidity: {parkWeather.main.humidity}%</p>
          <p>Wind Speed: {parkWeather.wind.speed} m/s</p>
          <p>Condition: {parkWeather.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}

export default Weather;
