import "../styles/Nav.css";
import { Link } from "react-router-dom";
import LeftFadeAnimation from "./AnimationComponents/LeftFadeAnimation";
/**
 * This is essentially the landing page which displays the different navigation pages as icons
 * @returns the nav component
 */
function Nav() {
  return (
    <LeftFadeAnimation>
      <div>
        <div className="squares-container">
          <div className="square">
            <a href="mailto:kevin24future@icloud.com">
              <div className="mail"></div>
            </a>
          </div>
          <div className="square">
            <Link to="./aboutme">
              <div className="home"></div>
            </Link>
          </div>
          <div className="square">
            <Link to="./projects">
              <div className="folder"></div>
            </Link>
          </div>
          <div className="square">
            <Link to="./experience">
              <div className="tools"></div>
            </Link>
          </div>
        </div>
      </div>
    </LeftFadeAnimation>
  );
}
export default Nav;
