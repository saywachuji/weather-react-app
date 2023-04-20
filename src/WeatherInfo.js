import TempUnits from "./TempUnits";
export default function WeatherInfo(props){
return (
<div className="WeatherInfo">
<div className="main-city mt-4">
                <h1>{props.data.city}</h1>
              </div>
                <div className="row">
                  <div className="col-4">
                    <ul className="list">
                    <li>Humidity: <span>{props.data.humidity}%</span></li>
                    <li>Wind: <span>{props.data.wind}</span>km/h</li>
                    </ul>
                  </div>
                <div className="col-8">
                   <TempUnits celsius={props.data.temp}/> 
                </div>
                
                </div>
                
    
                  <div className="row">
                    <div className="col">
                    <img className="main-image" alt={props.data.description} src={props.data.icon}/>
                    <br />
                    <span className="weather-description text-capitalize">{props.data.description}</span>

                    </div>
                  </div>
                
              <button>
                Current Location
              </button>
              <h3>Forecast</h3>

              
            
        
</div>
)
}