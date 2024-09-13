import React from 'react';

function Sculpture({ position }) {
  return (
    <group position={position}>
      {/* Sculpture Base */}
      <mesh position={[0, 0.2, 0]}>
        <boxGeometry args={[0.4, 0.1, 0.4]} />
        <meshStandardMaterial color="gray" />
      </mesh>

      {/* Abstract Form (Spiral) */}
      <mesh position={[0, 1, 0]} rotation={[0, 0, Math.PI / 4]}>
        <torusKnotGeometry args={[0.3, 0.1, 100, 16]} />
        <meshStandardMaterial color="gold" />
      </mesh>
    </group>
  );
}

export default Sculpture;
