import React, { useEffect } from "react";
import "../../styles/Pages/Nav.css";
import { Link } from "react-router-dom";
import AnimatedPage from "../AnimationComponents/AnimatedPage";
import { useDispatch } from "react-redux";
import { dontDisplayParticles, displayParticles } from "../../actions";
import DisplayEarth from "../UI/DisplayBackground";
import DisplayBackground from "../UI/DisplayBackground";


/**
 * This is essentially the landing page which displays the different navigation pages as icons
 * @returns the nav component
 */
function Nav() {
  const dispatch = useDispatch();

  //On initialization, set display of particles off
  useEffect(() => {
    dispatch(dontDisplayParticles());
   
  }, [dispatch]);

  return (
    <AnimatedPage>
      <div>
        <div className="squares-container">
          <div className="square">
            <a href="mailto:kevin24future@icloud.com">
              <div className="mail"></div>
            </a>
          </div>
          <div className="square">
            <Link onClick={() => dispatch(displayParticles())} to="./aboutme">
              <div className="home"></div>
            </Link>
          </div>
          <div className="square">
            <Link onClick={() => dispatch(displayParticles())} to="./projects">
              <div className="folder"></div>
            </Link>
          </div>
          <div className="square">
            <Link
              onClick={() => dispatch(displayParticles())}
              to="./experience"
            >
              <div className="tools"></div>
            </Link>
          </div>
        </div>
      </div>
      <DisplayBackground />
    </AnimatedPage>
  );
}
export default Nav;
