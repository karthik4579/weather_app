import React, { useState, useEffect } from 'react';
import { getCurrentWeather, getForecast } from './Api';
import Weather from './Weather';
import './App.css';

const App = () => {

  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;

      const currentWeatherData = await getCurrentWeather(latitude, longitude);
      const forecastData = await getForecast(latitude, longitude);

      setWeatherData(currentWeatherData);
      setForecastData(forecastData);
    });
  }, []);

  if (!weatherData) {
    return (
      <div className="loading">
        <p>Loading...</p>
      </div>
    );
  }

  
  return (
    <div className="App">

      <header className="App-header" style={{ backgroundColor: 'transparent' }}>
        <h1 style={{ color: 'dark blue' }}>Weather App</h1>
      </header>

  <Weather weatherData={weatherData} forecastData={forecastData} />
      
    </div >
  );
}

export default App;