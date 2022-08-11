import Clock from "./Clock";
// import { useSelector, useDispatch } from "react-redux";
// import { changeToLight, changeToDark } from "../actions";
import "../../styles/Header.css";
/**
 * This is the top of the page with the clock component, the name, and sun/moon icon
 * @returns Header component
 */
const Header = () => {
  // const isDark = useSelector((state) => state.displayThemeReducer);
  // const dispatch = useDispatch();

  // const callDispatch = () => { //Calls to our redux in order to check what state we're in
  //   if (!isDark) {//If it is light change to dark
  //     dispatch(changeToDark());
  //     document.body.style.backgroundColor = '#191C27'
      
  //   } else {//if it is dark change to light
  //     dispatch(changeToLight());
  //     document.body.style.backgroundColor = '#70A9FF'
  //   }
  // };

  return (
    <div className="top-label">
      <div className="myName">Kevin Guillaume</div>
      <div className="timeAndDisplay">
        {/* {<div className={isDark ? "sun" : "moon"} onClick={callDispatch}></div>} */}
        <Clock />
      </div>
    </div>
  );
};

export default Header;
