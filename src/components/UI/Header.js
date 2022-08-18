import Clock from "./Clock";
// import { useSelector, useDispatch } from "react-redux";
// import { changeToLight, changeToDark } from "../actions";
import "../../styles/UI/Header.css";
/**
 * This is the top of the page with the clock component, the name, and sun/moon icon
 * @returns Header component
 */
const Header = () => {
  return (
    <div className="top-label">
      <div className="myName"></div>
      <div className="timeAndDisplay">
        {/* {<div className={isDark ? "sun" : "moon"} onClick={callDispatch}></div>} */}
        <Clock />
      </div>
    </div>
  );
};

export default Header;
