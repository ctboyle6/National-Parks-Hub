import React from 'react';

const Weather = (props) => {
  return (
    <div className="wrapper">
      <div className="park-name"></div>
      <div className="park-coordinates"></div>
      <div className="park-main">
        <div className="temp"></div>
        <div className="feels like"></div>
        <div className="temp-min"></div>
        <div className="temp-max"></div>
        <div className="pressure"></div>
        <div className="humidity"></div>
      </div>
      <div className="wind">
        <div className="wind-dir"></div>
        <div className="wind-speed"></div>
      </div>
      <div className="time">
        <div className="sunrise"></div>
        <div className="sunset"></div>
      </div>
    </div>
  )
}

export default Weather;
