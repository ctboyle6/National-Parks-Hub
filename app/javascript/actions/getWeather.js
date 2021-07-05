import axios from 'axios'

export const getWeather = (park) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${park.data.attributes.latitude}&lon=${park.data.attributes.longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=imperial`)
        .then( res => {
            return res.data
        })
        .catch( res => console.log(res))
}