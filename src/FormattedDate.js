

export default function FormattedDate(props){
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
 let day = days[props.date.getDay()];
 let hours = props.date.getHours() < 10 ? `0${props.date.getHours()}` : props.date.getHours();
 let minutes = props.date.getMinutes() < 10 ? `0${props.date.getMinutes()}` : props.date.getMinutes();
 let ampm = hours >= 12 ? 'PM' : 'AM';
 let year = props.date.getFullYear();
 let seconds = props.date.getSeconds();
 setInterval(minutes, 60000)
 setInterval(seconds, 1000)


return `${day}, ${year} ${hours}:${minutes}:${seconds} ${ampm}`
}