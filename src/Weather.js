import "./Weather.css"

export default function Weather(){
    let weatherData = {
        city : "Napa",
        date: "Mon 10, 12:00",
        description: "Cloudy",
        imgUrl: "http://openweathermap.org/img/wn/02d@2x.png",
        humidity: 10,
        wind: 2
      
      }
      return(
      
      <div className = "Weather">
      <div className="search-bar">
              <form>
                <input type="text" placeholder="Find city" className="city" />
                <input type="submit" value="Search" className="search-button" />
              </form>
            </div>
      
            <div className="today-date-container">
              <p className="today-date">{weatherData.date}</p>
              <p>Last updated: {weatherData.date}</p>
              
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
                  <strong><span className="main-temp">12°C</span></strong>
                  <br />
                  <img className="main-image" alt={weatherData.description} src={weatherData.imgUrl} />
                  <br />
                  <span className="weather-description">{weatherData.description}</span> 
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
                 <img alt="{weatherData.description}"src={weatherData.imgUrl} width="70px" />
                  <div className="degrees">
                  <span>16°</span><span className="min-temp">12°</span>
                </div>
                </div>
              </div>
            </div>
        
            <footer>
            <div className="end">
              <small className="end-text"><a href="https://github.com/saywachuji/Weather-App" rel="noreferrer" target="_blank">Open source code</a> by Saywa Chuji</small>
            </div>
           </footer>
      
          </div>
      );
}