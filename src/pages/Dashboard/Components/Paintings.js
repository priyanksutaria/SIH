import React from 'react';
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';

function Painting({ position, image, rotation}) {
  const texture = useLoader(TextureLoader, image);

  return (
    <group position={position} rotation={rotation}>
      {/* Frame */}
      <mesh position={[0, 0, -0.09]}>
        <boxGeometry args={[4, 3, 0.1]} />
        <meshStandardMaterial color="brown" />
      </mesh>
      
      {/* Painting */}
      <mesh>
        <planeGeometry args={[3.5, 2.5]} />
        <meshBasicMaterial map={texture} />
      </mesh>
    </group>
  );
}

export default Painting;
