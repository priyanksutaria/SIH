import React from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

// Load textures
const woodTexture = '/assets/wood-texture.jpg'; // Replace with your actual path
const glassTexture = '/assets/glass-texture.jpg'; // Add a glass texture for enhanced look

function ConferenceTable({ position }) {
  const wood = useLoader(TextureLoader, woodTexture);
  const glass = useLoader(TextureLoader, glassTexture);

  return (
    <group position={position}>
      {/* Tabletop */}
      <mesh position={[-1.5, 1.45, 0]}>
        <boxGeometry args={[14, 0.1, 4]} /> {/* Increased size */}
        <meshStandardMaterial map={wood} />
      </mesh>

      {/* Glass panel on top */}
      <mesh position={[-1.5, 1.5, 0]}>
        <boxGeometry args={[12, 0.02, 3]} />
        <meshStandardMaterial map={glass} opacity={0.8} transparent />
      </mesh>

      {/* Table Legs */}
      {[[-6, 0.5, 0.9], [3, 0.5, 0.9], [-6, 0.5, -0.9], [3, 0.5, -0.9],
        [-1.5, 0.5, 0.9], [-1.5, 0.5, -0.9]].map(([x, y, z], index) => (
        <mesh key={index} position={[x, y, z]}>
          <cylinderGeometry args={[0.2, 0.2, 1.8, 32]} />
          <meshStandardMaterial color={'#8c8c8c'} />
        </mesh>
      ))}

      {/* Conference Phone */}
      <mesh position={[-1.5, 1.6, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.05, 32]} />
        <meshStandardMaterial color={'#333333'} />
      </mesh>

      {/* Embedded Cable Ports */}
      {[[-4, 1.6, 0], [1, 1.6, 0]].map(([x, y, z], index) => (
        <mesh key={index} position={[x, y, z]}>
          <boxGeometry args={[0.2, 0.05, 0.2]} />
          <meshStandardMaterial color={'#000000'} />
        </mesh>
      ))}
    </group>
  );
}

export default ConferenceTable;
