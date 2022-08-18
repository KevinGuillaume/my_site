import { OrbitControls, Stars, Text3D } from "@react-three/drei";
import React, { useState } from "react";
import { Earth } from "../ThreeJS/Earth";
import { Canvas } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";
import { CraftTableHome } from "../ThreeJS/CraftTableHome";
import { ResumeHome } from "../ThreeJS/ResumeHome";
import { useDispatch } from "react-redux";
import { displayParticles } from "../../actions";
import { useSpring, animated, config } from "@react-spring/three";

/**
 * This is the Home,Projects, Experience navigation, and the stars background of the home screen
 *
 * TO DO:
 *
 * Make The Different Icons become a route
 *
 *
 * @returns
 */
const DisplayBackground = () => {
  const dispatch = useDispatch();
  const [projActive, setProjActive] = useState(false);
  const [expActive, setExpActive] = useState(false);

  const projectHover = useSpring({ scale: projActive ? 1.1 : 1 })
  const experienceHover = useSpring({ scale: expActive ? 1.1 : 1 })
  

  const navigate = useNavigate();

  const experienceClickHandler = () => {
    dispatch(displayParticles());
    navigate("/experience");
  };
  const projectsClickHandler = () => {
    dispatch(displayParticles());
    navigate("/projects");
  };

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
      {/* HOME ICON */}
      <Text3D
        position={[-1.5, 2, 1.2]}
        font={process.env.PUBLIC_URL + "../../Roboto_Regular.json"}
        size={0.275}
        height={0.065}
        curveSegments={12}
      >
        {`Kevin Guillaume`}
        <meshStandardMaterial color={[2, 0.15, 0.1]} emissive={[1, 0.1, 0]} />
      </Text3D>
      <Earth />
      {/* PROJECTS ICON */}
      <animated.mesh scale={projectHover.scale}
        onPointerOver={() => setProjActive(true)}
        onPointerLeave={() => setProjActive(false)}
        onClick={projectsClickHandler}
      >
      <Text3D
        position={[-4.5, 2, 0]}
        font={process.env.PUBLIC_URL + "../../Roboto_Regular.json"}
        size={0.275}
        height={0.065}
        curveSegments={12}
      >
        Projects
        <meshStandardMaterial color={[2, 0.15, 0.1]} emissive={[1, 0.1, 0]} />
      </Text3D>
      
        
        <CraftTableHome />
      </animated.mesh>

      {/* EXPERIENCE ICON */}
      <animated.mesh
        scale={experienceHover.scale}
        onPointerOver={() => setExpActive(true)}
        onPointerLeave={() => setExpActive(false)}
        onClick={experienceClickHandler}
      >
      <Text3D
        position={[3.5, 2, 0]}
        font={process.env.PUBLIC_URL + "../../Roboto_Regular.json"}
        size={0.275}
        height={0.065}
        curveSegments={12}
      >
        Experience
        <meshStandardMaterial color={[2, 0.15, 0.1]} emissive={[1, 0.1, 0]} />
      </Text3D>
     
        <ResumeHome />
      </animated.mesh>
    </Canvas>
  );
};

export default DisplayBackground;