
function Clock(){
  
    
    
    let date = new Date()
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let AMorPM = "AM"
    

    if(hours == 0){
        hours = 12
    }
    if(hours > 12){ 
        hours = hours - 12;
        AMorPM = "PM"
    }

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;

    let time = hours + ":" + minutes + " " + AMorPM;

    
    

    return (
        <div>{time}</div>    
    )
}
export default Clock