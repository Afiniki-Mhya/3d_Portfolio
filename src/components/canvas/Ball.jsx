import CanvasLoader from "../Loader";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import { MeshStandardMaterial } from "three";




const Ball = (props) => {
  const [decal] = useTexture([props.imageUrl]);
  // decal.flipY = false;

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8ed'
          polygonOffset
          polygonOffsetFactor={-5}
          // polygonOffsetUnits={-1}
          flatShading
        />
        <Decal 
        position={[0, 0, 1]}
        rotation={[2 * Math.PI, 0, 6.25]}
        // scale={1.2}
        flatShading
        map={decal} />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imageUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
