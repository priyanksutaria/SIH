import React from 'react';

function WallShelf({ position }) {
  return (
    <group position={position}>
      {/* Shelf Boards */}
      {[0, 1, 2].map((y, index) => (
        <mesh key={index} position={[0, y, 0]}>
          <boxGeometry args={[2, 0.1, 0.5]} />
          <meshStandardMaterial color={'#8B4513'} /> {/* Wooden texture */}
        </mesh>
      ))}

      {/* Shelf Supports */}
      {[[-0.9, 0.05, 0], [0.9, 0.05, 0]].map(([x, y, z], index) => (
        <mesh key={index} position={[x, y, z]}>
          <cylinderGeometry args={[0.05, 0.05, 0.5, 32]} />
          <meshStandardMaterial color={'#000000'} />
        </mesh>
      ))}
    </group>
  );
}

export default WallShelf;
