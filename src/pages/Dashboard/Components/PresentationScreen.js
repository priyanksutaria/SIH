import React from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

// Load textures
const screenTexture = '/assets/screen-texture.png'; // Replace with your actual path

function PresentationScreen({ position, rotation }) {
  const texture = useLoader(TextureLoader, screenTexture);

  return (
    <group position={position} rotation={rotation}>
      {/* Screen */}
      <mesh position={[0, 3, 0]}>
        <boxGeometry args={[9, 5, 0.1]} /> {/* Screen dimensions */}
        <meshStandardMaterial color={'#000000'} /> {/* Black border */}
      </mesh>

      {/* Display Area */}
      <mesh position={[0, 3, 0.09]}>
        <planeGeometry args={[8.8, 4.8]} />
        <meshStandardMaterial map={texture} color={'#FFFFFF'} /> {/* White display */}
      </mesh>
    </group>
  );
}

export default PresentationScreen;
