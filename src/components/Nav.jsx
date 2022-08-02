import "../styles/Nav.css";
import { Link } from "react-router-dom";

function Nav() {

  return (
    <div>
      <div className="squares-container">
        <div className="square">
        <Link to="./contact"><div className="mail"></div></Link>
        </div>
        <div className="square">
        <Link to="./aboutme"><div className="home"></div></Link>
        </div>
        <div className="square">
        <Link to="./projects"><div className="folder"></div></Link>
        </div>
        <div className="square">
        <Link to="./experience"><div className="tools"></div></Link>
        </div>
      </div>
    </div>
  );
}
export default Nav;
