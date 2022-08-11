import React, {useRef} from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import moonTexture from "../../assets/moonTexture.jpg";




const Moon = () => {
  const colorMap = useLoader(TextureLoader, moonTexture);
  const moonRef = useRef()

  useFrame(({clock}) => {
    const elapsedTime = clock.getElapsedTime()

    moonRef.current.rotation.y = elapsedTime / 25;
  })

  return (
    <mesh ref={moonRef}>
      <sphereBufferGeometry attach="geometry" args={[3]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
    
  );
};
export default Moon;
