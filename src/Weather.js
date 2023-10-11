import React from 'react';

const Weather = ({ weatherData, forecastData }) => {

  const { main, wind } = weatherData;
  const { temp, humidity } = main;
  const { speed } = wind;
  const { pressure } = main;

  return (
    <div>
      <h2>Current Weather</h2>
      <table>
        <thead>
          <tr>
            <th>Weather Data</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Temperature</td>
            <td>{temp}&deg;C</td>
          </tr>
          <tr>
            <td>Humidity</td>
            <td>{humidity}%</td>
          </tr>
          <tr>
            <td>Wind Speed</td>
            <td>{speed} m/s</td>
          </tr>
          <tr>
            <td>Pressure</td>
            <td>{pressure} hPa</td>
          </tr>
        </tbody>
      </table>

      <h2>Forecast Data</h2>
      <table>
        <thead>
          <tr>
            <th>Temp</th>
            <th>Weather</th>
          </tr>
        </thead>
        <tbody>
          {forecastData?.list?.map(item => (
            <tr key={item.dt}>
              <td>{item.main.temp}&deg;C</td>
              <td>{item.weather[0].description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Weather;