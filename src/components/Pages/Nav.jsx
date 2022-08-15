import React, { Suspense } from "react";
import "../../styles/Pages/Nav.css";
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { Earth } from "../ThreeJS/Earth";
import { Loader, OrbitControls, Stars} from "@react-three/drei";
import AnimatedPage from "../AnimationComponents/AnimatedPage";
import { useDispatch } from "react-redux";
import { dontDisplayParticles, displayParticles } from "../../actions";
/**
 * This is essentially the landing page which displays the different navigation pages as icons
 * @returns the nav component
 */
function Nav() {
  const dispatch = useDispatch();
  dispatch(dontDisplayParticles());

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
      
      <Canvas className="sphere-canvas">
        <OrbitControls enableZoom={false} enablePan={false} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        
          <Stars
            radius={300}
            depth={60}
            count={20000}
            factor={7}
            saturation={0}
            fade={true}
          />
          <Earth />
        
      </Canvas>
      
    </AnimatedPage>
  );
}
export default Nav;
