import React from 'react';

export function FileCabinet({ position, rotation }) {
  return (
    <group position={position} rotation={rotation}>
      {/* Cabinet Body */}
      <mesh position={[0, 1.5, 0]}>
        <boxGeometry args={[4, 3, 1]} />
        <meshStandardMaterial color={'#3e3e3e'} />
      </mesh>

      {/* Cabinet Doors */}
      {[[-0.9, 1.5, 0.55], [0.9, 1.5, 0.55]].map(([x, y, z], index) => (
        <mesh key={index} position={[x, y, z]}>
          <boxGeometry args={[1.8, 2.8, 0.05]} />
          <meshStandardMaterial color={'#e0e0e0'} />
        </mesh>
      ))}

      {/* Door Handles */}
      {[[-0.8, 1.5, 0.6], [0.8, 1.5, 0.6]].map(([x, y, z], index) => (
        <mesh key={index} position={[x, y, z]}>
          <cylinderGeometry args={[0.05, 0.05, 0.2, 32]} />
          <meshStandardMaterial color={'#333333'} />
        </mesh>
      ))}
    </group>
  );
}

