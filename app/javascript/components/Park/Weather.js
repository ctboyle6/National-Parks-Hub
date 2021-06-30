import React from 'react';

const Weather = (props) => {
  const { coord, main, wind, clouds, sys, name, timezone } = props.weather

  const convertDate = (timestamp) => {
    return new Date(timestamp * 1000)
  }

  return (
    <div className="wrapper">
      <div className="park-coordinates">
        <p>Latitude: {coord.lat}</p>
        <p>Longitude: {coord.lon}</p>
      </div>
      <div className="park-main">
        <div className="temp">Temperature: {main.temp}</div>
        <div className="feels-like">Feels Like: {main.feels_like}</div>
        <div className="temp-min">Temp Low: {main.temp_min}</div>
        <div className="temp-max">Temp High: {main.temp_max}</div>
        <div className="pressure">Pressure: {main.pressure}</div>
        <div className="humidity">Humidity: {main.humidity}</div>
      </div>
      <div className="wind">
        <div className="wind-dir">Wind Direction: {wind.deg}</div>
        <div className="wind-speed">Wind Speed: {wind.speed}</div>
      </div>
      <div className="time">
        <div className="sunrise">Sunrise: {convertDate(sys.sunrise + timezone).toLocaleDateString("en-US")}</div>
        <div className="sunset">Sunset: {convertDate(sys.sunset + timezone).toLocaleDateString("en-US")}</div>
      </div>
    </div>
  )
}

export default Weather;
