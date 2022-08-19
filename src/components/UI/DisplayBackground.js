import { OrbitControls, Stars, Text3D } from "@react-three/drei";
import "../../styles/UI/DisplayBackground.css";
import React, { useState } from "react";
import { Earth } from "../ThreeJS/Earth";
import { Canvas } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";
import { CraftTableHome } from "../ThreeJS/CraftTableHome";
import { ResumeHome } from "../ThreeJS/ResumeHome";
import { useDispatch } from "react-redux";
import { displayParticles } from "../../actions";
import { useSpring, animated, config } from "@react-spring/three";
import { Monitor } from "../ThreeJS/Monitor";

/**
 * This is the Home,Projects, Experience navigation, and the stars background of the home screen
 *This file is pretty dense because a lot of helper functions are involved.
 *
 *
 * @returns
 */
const DisplayBackground = () => {
  const dispatch = useDispatch();
  const [projActive, setProjActive] = useState(false);
  const [expActive, setExpActive] = useState(false);
  const [homeActive, setHomeActive] = useState(false);

  //React-Spring hover animations
  const projectHover = useSpring({
    scale: projActive ? 1.15 : 1,
    config: config.wobbly,
  });
  const experienceHover = useSpring({
    scale: expActive ? 1.15 : 1,
    config: config.wobbly,
  });
  const homeHover = useSpring({
    scale: homeActive ? 1.1 : 1,
    config: config.wobbly,
  });

  const navigate = useNavigate(); //Used for navigating to different pages depending on clicked model

  //All these functions below are meant to deal with clicks or hovers respectively
  //Cliks navigates to pages, and hovers are for animations
  const experienceClickHandler = () => {
    dispatch(displayParticles());
    document.body.style.cursor = "default";
    navigate("/experience");
  };
  const projectsClickHandler = () => {
    dispatch(displayParticles());
    document.body.style.cursor = "default";
    navigate("/projects");
  };
  const homeClickHandler = () => {
    dispatch(displayParticles());
    document.body.style.cursor = "default";
    navigate("/aboutme");
  };
  const expHoverHandler = () => {
    setExpActive(true);
    document.body.style.cursor = "pointer";
  };
  const expHoverLeaveHandler = () => {
    setExpActive(false);
    document.body.style.cursor = "default";
  };
  const projHoverHandler = () => {
    setProjActive(true);
    document.body.style.cursor = "pointer";
  };
  const projHoverLeaveHandler = () => {
    setProjActive(false);
    document.body.style.cursor = "default";
  };
  const homeHoverHandler = () => {
    setHomeActive(true);
    document.body.style.cursor = "pointer";
  };
  const homeHoverLeaveHandler = () => {
    setHomeActive(false);
    document.body.style.cursor = "default";
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
      <animated.mesh
        className="earth-model"
        scale={homeHover.scale}
        onPointerOver={homeHoverHandler}
        onPointerLeave={homeHoverLeaveHandler}
        onClick={homeClickHandler}
      >
        <Text3D
          position={[-1.3, 2, 0]}
          font={process.env.PUBLIC_URL + "../../Roboto_Regular.json"}
          size={0.275}
          height={0.065}
          curveSegments={12}
        >
          {`Kevin Guillaume`}
          <meshStandardMaterial color={[2, 0.15, 0.1]} emissive={[1, 0.1, 0]} />
        </Text3D>
        <Monitor />
      </animated.mesh>
      {/* PROJECTS ICON */}
      <animated.mesh
        scale={projectHover.scale}
        onPointerOver={projHoverHandler}
        onPointerLeave={projHoverLeaveHandler}
        onClick={projectsClickHandler}
      >
        <Text3D
          position={[-5.5, 2, 0]}
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
        onPointerOver={expHoverHandler}
        onPointerLeave={expHoverLeaveHandler}
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
