import axios from 'axios';

export default function Weather(){
    const handleResponse = (response) => {
        alert(`The weather in Napa is ${response.data.main.temp}`)
    }
    
    let url = `https://api.openweathermap.org/data/2.5/weather?q=Napa&appid=88724523008dc9e1be18f6eb6a959b67&units=metric`;
    axios.get(url).then(handleResponse);
}