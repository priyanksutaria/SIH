import React from 'react';

function DiningTable({ position }) {
  return (
    <group position={position}>
      {/* Table Top */}
      <mesh position={[0, 0.75, 0]}>
        <boxGeometry args={[3, 0.1, 2]} /> {/* Rectangular table */}
        <meshStandardMaterial color={'#8B4513'} /> {/* Dark wooden table */}
      </mesh>

      {/* Table Legs */}
      {[[-1.3, 0.35, 0.9], [-1.3, 0.35, -0.9], [1.3, 0.35, 0.9], [1.3, 0.35, -0.9]].map(([x, z], index) => (
        <mesh key={index} position={[x, 0, z]}>
          <cylinderGeometry args={[0.1, 0.1, 0.7, 32]} />
          <meshStandardMaterial color={'#333333'} /> {/* Metal legs */}
        </mesh>
      ))}
    </group>
  );
}

export default DiningTable;
