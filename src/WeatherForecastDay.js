
export default function WeatherForecastDay(props){

const day = () => {
let date = new Date (props.data.time * 1000);
let day = date.getDay(); 

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

return days[day]


};
    return (
        <div>
        <div className="days">{day()}</div>
               <img alt={props.data.condition.description} src={props.data.condition.icon_url} width="70px" />
                <div className="degrees">
                <span>{Math.round(props.data.temperature.maximum)}° </span><span className="min-temp">{Math.round(props.data.temperature.minimum)}°</span>
              </div>
        </div>
    );

}