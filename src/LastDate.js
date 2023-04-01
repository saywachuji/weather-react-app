

export default function LastDate(props){

     let hours = props.date.getHours() < 10 ? `0${props.date.getHours()}` : props.date.getHours();
     let minutes = props.date.getMinutes() < 10 ? `0${props.date.getMinutes()}` : props.date.getMinutes();
     let ampm = hours >= 12 ? 'PM' : 'AM';
     
    
    
    
    
    return `${hours}:${minutes} ${ampm}`
    }