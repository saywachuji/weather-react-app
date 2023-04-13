import React ,{ useState} from 'react';

export default function TempUnits(props) { 
const [units, setUnits] = useState('celsius');
const showFahrenheit = (event) => {
event.preventDefault();
setUnits('fahrenheit')
}

const showCelsius = (event) => {
    event.preventDefault();
    setUnits('celsius')
    }

if (units === 'celsius'){
      return(
        <div className="Units">
            <div className="row">
        <div className="col-6">
        <strong><span className="main-temp">{Math.round(props.celsius)}°</span></strong>
                </div>
        <div className="col-6">
                <div className="unit-container">
                      <span className="units celsius">C°</span>
                      <span className="units farenheit"><a href="/" onClick={showFahrenheit}>F°</a></span>
                    </div>
            </div>
            </div>
            </div>
    )  
} else{

    let fahrenheit = (props.celsius * 9/5) + 32;
    return (
        <div className="Units">
            <div className="row">
        <div className="col-6">
        <strong><span className="main-temp">{Math.round(fahrenheit)}°</span></strong>
                </div>
        <div className="col-6">
                <div className="unit-container">
                      <span className="units celsius"><a href="/" onClick={showCelsius}>C°</a></span>
                      <span className="units farenheit">F°</span>
                    </div>
            </div>
            </div>
            </div>
    )
}

}