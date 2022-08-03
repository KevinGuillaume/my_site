import { useEffect, useState } from "react";
/**
 * Live clock that calculates the current time based on 12 hour clock
 * @returns Clock component
 */
function Clock() {
  const [clock, setClock] = useState();
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClock(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return <div style={{ fontSize: "25px" }}>{clock}</div>;
}
export default Clock;
