import axios from 'axios'

export default function WeatherForecast(props) {

const handleSearch = (response) => {
console.log(response.data)
}
    
let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${props.coordinates.latitude}&lon=${props.coordinates.longitude}&key=c635taf5ao3b501623e4fa7bf7fc0f02&units=metric`
axios.get(apiUrl).then(handleSearch)


    return(
        <div className="WeatherForecast">

              
                <div className="row">
                  <div className="col">
                    <div className="days">Mon</div>
                   <img alt="description"src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png" width="70px" />
                    <div className="degrees">
                    <span>16°</span><span className="min-temp">12°</span>
                  </div>
                  </div>
                </div>
              
              </div>
    )
}