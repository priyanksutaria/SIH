import React from 'react';
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';

function Floor({ position, image}) {
  const texture = useLoader(TextureLoader, image);

  return (
    <group position={position} rotation={[-Math.PI/2,0,0]}>
      {/* Frame */}
      <mesh position={[0, 0, -0.09]}>
        <boxGeometry args={[50,50, 0.1]} />
        <meshStandardMaterial color="brown" />
      </mesh>
      
      {/* Painting */}
      <mesh>
        <planeGeometry args={[50, 50]} />
        <meshBasicMaterial map={texture} />
      </mesh>
    </group>
  );
}

export default Floor;
