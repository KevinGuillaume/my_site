import Clock from "./Clock";
import "../styles/Header.css"

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
