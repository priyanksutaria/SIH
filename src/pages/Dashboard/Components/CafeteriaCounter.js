import React from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

const marbleTexture = '/assets/marble-texture.jpg'; // Replace with actual path

function CafeteriaCounter({ position, rotation }) {
  const marble = useLoader(TextureLoader, marbleTexture);

  return (
    <group position={position} rotation={rotation}>
      {/* Counter Base */}
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[6, 1, 2]} />
        <meshStandardMaterial map={marble} />
      </mesh>

      {/* Cash Register */}
      <mesh position={[-1.5, 1.6, 0.8]}>
        <boxGeometry args={[0.6, 0.4, 0.6]} />
        <meshStandardMaterial color={'#333333'} />
      </mesh>

      {/* Cash Register Screen */}
      <mesh position={[-1.5, 1.8, 1]}>
        <planeGeometry args={[0.3, 0.2]} />
        <meshStandardMaterial color={'#00ff00'} /> {/* Placeholder for a digital display */}
      </mesh>
    </group>
  );
}

export default CafeteriaCounter;
