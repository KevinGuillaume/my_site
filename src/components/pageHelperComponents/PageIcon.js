import "../../styles/pageHelperStyles/PageIcon.css";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Resume } from "../ThreeJS/Resume";
import { House3D } from "../ThreeJS/House3D";
import { CraftTable } from "../ThreeJS/CraftTable";
/**
 * The selected icon at the top for the given page
 * @params passed in props that will be the used for deciding the icon
 * @returns
 */
const PageIcon = (props) => {
  return (
    <div className="selected-page-box">
      <Canvas className="icon-canvas">
        <ambientLight intensity={0.6} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          {props.iconName === "folder" ? <CraftTable /> : ""}
          {props.iconName === "tools" ? <Resume /> : ""}
          {props.iconName === "home" ? <House3D /> : ""}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default PageIcon;
