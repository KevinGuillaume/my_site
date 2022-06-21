import { useEffect, useState } from "react";

function Clock(){
    const [clock,setClock] = useState()
    useEffect(() =>{
        setInterval(() =>{
            const date = new Date()
            setClock(date.toLocaleTimeString())
        },1000)
    },[])

   
    

    
    

    return (
        <div style ={{fontSize: "25px"}}>{clock}</div>    
    )
}
export default Clock