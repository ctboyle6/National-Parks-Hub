import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
border: 1px solid rgba(0, 0, 0, 0.1);
border-radius: 4px;
margin: 0 20px 20px 0;
`

const Section = styled.div`
  padding: 20px;

  i {
    font-size: 24px;
  }
`

const Weather = (props) => {
  const { coord, main, wind, clouds, sys, name, timezone } = props.weather

  const convertDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString("en-US")
  }

  return (
    <Wrapper>
      <Section>
        <i class="fas fa-map-marked-alt"></i>
        <p>
          Latitude: {coord.lat}°
          <br></br>
          Longitude: {coord.lon}°
        </p>
      </Section>
      <Section>
        <i class="fas fa-temperature-high"></i>
        <div className="temp">Temperature: {main.temp}°F</div>
        <div className="feels-like">Feels Like: {main.feels_like}°F</div>
        <div className="temp-min">Temp Low: {main.temp_min}°F</div>
        <div className="temp-max">Temp High: {main.temp_max}°F</div>
        <div className="pressure">Pressure: {main.pressure}hPa</div>
        <div className="humidity">Humidity: {main.humidity}%</div>
      </Section>
      <Section>
        <i class="fas fa-wind"></i>
        <div className="wind-dir">Wind Direction: {wind.deg}°</div>
        <div className="wind-speed">Wind Speed: {wind.speed}mph</div>
      </Section>
      <Section>
        <i class="fas fa-sun"></i>
        <div className="sunrise">Sunrise: {convertDate(sys.sunrise)}</div>
        <div className="sunset">Sunset: {convertDate(sys.sunset)}</div>
      </Section>
    </Wrapper>
  )
}

export default Weather;
