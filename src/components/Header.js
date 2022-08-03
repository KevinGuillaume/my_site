import Clock from "./Clock";
import "../styles/Header.css"
/**
 * This is the top of the page with the clock component, the name, and sun/moon icon
 * @returns Header component
 */
const Header = () => {
  return (
    <div className="top-label">
      <div className="myName">Kevin Guillaume</div>
      <div className="timeAndDisplay">
        <div className="sun"></div>
        <Clock />
      </div>
    </div>
  );
};

export default Header;
