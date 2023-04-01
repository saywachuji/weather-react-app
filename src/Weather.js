import "./Weather.css"
import React,{ useState } from 'react';
import axios from 'axios';
import FormattedDate from "./FormattedDate";

export default function Weather(){

const [loaded, setLoaded] = useState(false);
const [weatherData, setWeatherData] = useState({});


const handleSearch = (response) => {
setWeatherData({
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


if (loaded){
    return(
      
        <div className = "Weather">
        <div className="search-bar">
                <form>
                  <input type="text" placeholder="Find city" className="city" />
                  <input type="submit" value="Search" className="search-button" />
                </form>
              </div>
        
              <div className="today-date-container">
                <p className="today-date"><FormattedDate date={weatherData.date} /></p>
                <p>Last updated: 12 Oct, 2023</p>
                
              </div>
        
              <div className="main-city">
                <h1>{weatherData.city}</h1>
              </div>
                <div className="row">
                  <div className="col-4">
                    <ul className="list">
                    <li>Humidity: <span>{weatherData.humidity}</span></li>
                    <li>Wind: <span>{weatherData.wind}</span>km/h</li>
                    </ul>
                  </div>
                  <div className="col-4">
                    <strong><span className="main-temp">{Math.round(weatherData.temp)}°C</span></strong>
                    <br />
                    <img className="main-image" alt={weatherData.description} src={weatherData.icon}/>
                    <br />
                    <span className="weather-description text-capitalize">{weatherData.description}</span> 
                  </div>
                  <div className="col-4">
                    <div className="unit-container">
                      <span className="units"><a href="/" className="celsius">C°</a></span>
                      <span className="units"><a href="/" className="farenheit">F°</a></span>
                    </div>
                  </div>
                
                
              </div>
            
              <button>
                Current Location
              </button>
            
              <h3>Forecast</h3>
              <div className="forecast-container">
                <div className="row">
                  <div className="col">
                    <div className="days">Mon</div>
                   <img alt="{weatherData.description}"src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png" width="70px" />
                    <div className="degrees">
                    <span>16°</span><span className="min-temp">12°</span>
                  </div>
                  </div>
                </div>
              </div>
          
              <footer>
              <div className="end">
                <small className="end-text"><a href="https://github.com/saywachuji/weather-react-app" rel="noreferrer" target="_blank">Open source code</a> by Saywa Chuji</small>
              </div>
             </footer>
        
            </div>
        );
} else {
    let key = "c635taf5ao3b501623e4fa7bf7fc0f02";
    let units = "metric";
    let city = "New York"
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=${units}`
    axios.get(apiUrl).then(handleSearch)

    return 'Loading'
   
}
   
      
}