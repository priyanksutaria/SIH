import React from 'react';

function WallClock({ position, rotation }) {
  return (
    <group position={position} rotation={rotation}>
      {/* Clock Body */}
      <mesh rotation={[Math.PI/2,0,0]}>
        <cylinderGeometry args={[1, 1, 0.1, 32]} />
        <meshStandardMaterial color={'#000000'} />
      </mesh>

      {/* Clock Hands */}
      <mesh position={[0, -0.3, 0.05]}>
        <boxGeometry args={[0.05, 0.7, 0.05]} />
        <meshStandardMaterial color={'#ffffff'} />
      </mesh>
      <mesh position={[0.15, -0.15, 0.05]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.05, 0.5, 0.05]} />
        <meshStandardMaterial color={'#ffffff'} />
      </mesh>
    </group>
  );
}


export function TechTrolley({ position, rotation }) {
  return (
    <group position={position} rotation={rotation}>
      {/* Trolley Surface */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[2, 0.1, 1]} />
        <meshStandardMaterial color={'#666666'} />
      </mesh>

      {/* Trolley Legs */}
      {[[-0.9, 0.25, 0.4], [0.9, 0.25, 0.4], [-0.9, 0.25, -0.4], [0.9, 0.25, -0.4]].map(([x, y, z], index) => (
        <mesh key={index} position={[x, y, z]}>
          <cylinderGeometry args={[0.05, 0.05, 0.5, 32]} />
          <meshStandardMaterial color={'#999999'} />
        </mesh>
      ))}

      {/* Wheels */}
      {[[-0.9, 0, 0.4], [0.9, 0, 0.4], [-0.9, 0, -0.4], [0.9, 0, -0.4]].map(([x, y, z], index) => (
        <mesh key={index} position={[x, y, z]}>
          <cylinderGeometry args={[0.1, 0.1, 0.2, 16]} rotation={[Math.PI / 2, 0, 0]} />
          <meshStandardMaterial color={'#444444'} />
        </mesh>
      ))}
    </group>
  );
}


export default WallClock;
