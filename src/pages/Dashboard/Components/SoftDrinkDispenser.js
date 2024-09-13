import React from 'react';

function SoftDrinkDispenser({ position, rotation }) {
  return (
    <group position={position} rotation={rotation}>
      {/* Dispenser Base */}
      <mesh position={[0, 1.2, 0]}>
        <boxGeometry args={[2, 1.5, 1]} />
        <meshStandardMaterial color={'#666666'} />
      </mesh>

      {/* Drink Nozzles */}
      {[[-0.6, 1.7, 0.5], [0, 1.7, 0.5], [0.6, 1.7, 0.5]].map(([x, y, z], index) => (
        <mesh key={index} position={[x, y, z]}>
          <cylinderGeometry args={[0.05, 0.05, 0.15, 32]} />
          <meshStandardMaterial color={'#222222'} />
        </mesh>
      ))}

      {/* Cup Placement Platform */}
      <mesh position={[0, 1.05, 0.5]}>
        <boxGeometry args={[1.8, 0.05, 0.7]} />
        <meshStandardMaterial color={'#444444'} />
      </mesh>

      {/* Cup Dispenser */}
      <mesh position={[-1, 1.2, 0.7]}>
        <cylinderGeometry args={[0.2, 0.25, 1, 32]} />
        <meshStandardMaterial color={'#FFFFFF'} />
      </mesh>

      {/* Cups on Platform */}
      <mesh position={[0.6, 1.1, 0.6]}>
        <cylinderGeometry args={[0.15, 0.15, 0.3, 32]} />
        <meshStandardMaterial color={'#FFFFFF'} opacity={0.8} transparent />
      </mesh>
    </group>
  );
}

export default SoftDrinkDispenser;
