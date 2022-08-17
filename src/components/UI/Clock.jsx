import { useEffect, useState } from "react";
import "../../styles/UI/Clock.css";
/**
 * Live clock that calculates the current time based on 12 hour clock
 * @returns Clock component
 */
function Clock() {
  const [clock, setClock] = useState();
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClock(
        date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
    }, 1000);
  }, []);
  
  
  return <div className="clock">{clock}</div>;
}
export default Clock;
