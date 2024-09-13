import React from 'react';

function Chair({ position, rotation }) {
  return (
    <group position={position} rotation={rotation}>
      {/* Chair Seat */}
      <mesh position={[0, 0.7, 0]}>
        <boxGeometry args={[1.4, 0.15, 1.4]} />
        <meshStandardMaterial color={'#3d3d3d'} />
      </mesh>

      {/* Chair Backrest */}
      <mesh position={[0, 1.2, -0.65]}>
        <boxGeometry args={[1.4, 1, 0.15]} />
        <meshStandardMaterial color={'#3d3d3d'} />
      </mesh>

      {/* Chair Padding */}
      <mesh position={[0, 0.725, 0]}>
        <boxGeometry args={[1.35, 0.05, 1.35]} />
        <meshStandardMaterial color={'#5d5d5d'} />
      </mesh>
      <mesh position={[0, 1.2, -0.625]}>
        <boxGeometry args={[1.35, 0.95, 0.05]} />
        <meshStandardMaterial color={'#5d5d5d'} />
      </mesh>

      {/* Armrests */}
      <mesh position={[-0.7, 0.9, 0]}>
        <boxGeometry args={[0.1, 0.15, 1.1]} />
        <meshStandardMaterial color={'#4a4a4a'} />
      </mesh>
      <mesh position={[0.7, 0.9, 0]}>
        <boxGeometry args={[0.1, 0.15, 1.1]} />
        <meshStandardMaterial color={'#4a4a4a'} />
      </mesh>

      {/* Armrest Supports */}
      {[[-0.65, 0.6, 0.5], [-0.65, 0.6, -0.5], [0.65, 0.6, 0.5], [0.65, 0.6, -0.5]].map(([x, y, z], index) => (
        <mesh key={index} position={[x, y, z]}>
          <cylinderGeometry args={[0.05, 0.05, 0.5, 16]} />
          <meshStandardMaterial color={'#4a4a4a'} />
        </mesh>
      ))}

      {/* Chair Legs */}
      {[[-0.6, 0.4, 0.6], [0.6, 0.4, 0.6], [-0.6, 0.4, -0.6], [0.6, 0.4, -0.6]].map(([x, y, z], index) => (
        <mesh key={index} position={[x, y, z]}>
          <cylinderGeometry args={[0.08, 0.08, 1.2, 32]} />
          <meshStandardMaterial color={'#4a4a4a'} />
        </mesh>
      ))}

      {/* Chair Base */}
      <mesh position={[0, 0.25, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 0.2, 32]} />
        <meshStandardMaterial color={'#333333'} />
      </mesh>

      {/* Wheels */}
      {[[-0.7, 0.05, 0.7], [0.7, 0.05, 0.7], [-0.7, 0.05, -0.7], [0.7, 0.05, -0.7], [0, 0.05, 0]].map(([x, y, z], index) => (
        <mesh key={index} position={[x, y, z]}>
          <cylinderGeometry args={[0.1, 0.1, 0.2, 16]} rotation={[Math.PI / 2, 0, 0]} />
          <meshStandardMaterial color={'#222222'} />
        </mesh>
      ))}
    </group>
  );
}

export default Chair;
