import axios from 'axios'
import React, { useState } from 'react';
import WeatherForecastDay from "./WeatherForecastDay"

export default function WeatherForecast(props) {

const [loaded, setLoaded] = useState(false);
const [forecastData, setForecastData] = useState(null);

  function handleSearch(response) {
    setForecastData(response.data.daily);
    setLoaded(true);

  }
    


if (loaded){
  return(
    <div className="WeatherForecast">
            <div className="row">
              <div className="col">
                <WeatherForecastDay data={forecastData[0]}/>
              </div>
            </div>
          
          </div>
)
} else {
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${props.coordinates.latitude}&lon=${props.coordinates.longitude}&key=c635taf5ao3b501623e4fa7bf7fc0f02&units=metric`
  axios.get(apiUrl).then(handleSearch)
  console.log(apiUrl)
}}