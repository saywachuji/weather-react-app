import "./Weather.css"
import React, { useState } from 'react';
import axios from 'axios';
import FormattedDate from "./FormattedDate";
import LastDate from "./LastDate";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast"
import { Grid } from 'react-loader-spinner';

export default function Weather(props){
const [loaded, setLoaded] = useState(false);
const [weatherData, setWeatherData] = useState({});
const [city, setCity] = useState(props.defaultCity);


const handleSearch = (response) => {

setWeatherData({
    coords: response.data.coordinates,
    city: response.data.city,
    temp: response.data.temperature.current,
    humidity: response.data.temperature.humidity,
    wind: response.data.wind.speed,
    icon: response.data.condition.icon_url,
    description: response.data.condition.description,
    date: new Date(response.data.time * 1000),
    
});
setLoaded(true);
};

const search = () => {
  let key = "c635taf5ao3b501623e4fa7bf7fc0f02";
  let units = "metric";

  const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=${units}`
  axios.get(apiUrl).then(handleSearch)
}
const handleSubmit = (event) => {
  event.preventDefault();
  search()
}

const handleCityInput = (event) => {
setCity(event.target.value)
}

if (loaded){
    return(
      
        <div className = "Weather">
        <div className="search-bar">
                <form onSubmit={handleSubmit}>
                  <input type="text" placeholder="Find city" className="city" onChange={handleCityInput}/>
                  <input type="submit" value="Search" className="search-button" />
                </form>
              </div>
        
              <div className="today-date-container">
                <p className="today-date"><FormattedDate /></p>
                <p>Last Updated: <LastDate date={weatherData.date} /></p>
                
              </div>
              <WeatherInfo data={weatherData}/>
              <WeatherForecast coordinates={weatherData.coords}/>
        
            </div>
        );
} else {

  search()
    return ( 

<Grid
  className="center"
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="grid-loading"
  radius="12.5"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
)
      
   
}
   
      
}