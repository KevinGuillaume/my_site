import React, { useEffect } from "react";
import "../../styles/Pages/Nav.css";
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { Earth } from "../ThreeJS/Earth";
import { OrbitControls, Stars, Text3D } from "@react-three/drei";
import AnimatedPage from "../AnimationComponents/AnimatedPage";
import { useDispatch } from "react-redux";
import { dontDisplayParticles, displayParticles } from "../../actions";

/**
 * This is the earth and the stars background
 * @returns
 */
const DisplayEarth = () => {
  return (
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
      <Text3D
      position={[-1.5,2.1,0]}
        font={process.env.PUBLIC_URL + "../../Roboto_Regular.json"}
        size={0.275}
        height={0.065}
        curveSegments={12}

        
      >Kevin Guillaume
      <meshStandardMaterial color={[2,0.15,0.1]} emissive={[1,0.1,0]} />
      </Text3D>
      <Earth />
    </Canvas>
  );
};

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
      <DisplayEarth />
    </AnimatedPage>
  );
}
export default Nav;
