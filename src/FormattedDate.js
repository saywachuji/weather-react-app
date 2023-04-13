import { useState, useEffect } from "react";

export default function FormattedDate(){

const date = new Date()
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
 let day = days[date.getDay()];
 let hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
 let minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
 let year = date.getFullYear();
 let ampm = hours >= 12 ? 'PM' : 'AM';

 function RealTimeSeconds() {
    const [seconds, setSeconds] = useState(new Date().getSeconds());
  
    useEffect(() => {
      function updateSeconds() {
        const seconds = new Date().getSeconds();
        setSeconds(seconds);
      };
      const intervalId = setInterval(updateSeconds, 1000);
      return () => clearInterval(intervalId);
    }, []);

    if (seconds < 10){
        return `0${seconds}`
    }
  
    return (

        `${seconds}`
  
    );
  }

return `${day}, ${year} ${hours}:${minutes}:${RealTimeSeconds()} ${ampm}`
}