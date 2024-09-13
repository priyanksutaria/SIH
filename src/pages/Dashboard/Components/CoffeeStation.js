import React from 'react';

function CoffeeStation({ position,rotation }) {
  return (
    <group position={position} rotation={rotation}>
      {/* Coffee Machine */}
      <group position={[-1, 1, 0]}>
        <mesh position={[0, 0.8, 0]}>
          <boxGeometry args={[0.6, 1, 0.6]} />
          <meshStandardMaterial color={'#333333'} />
        </mesh>

        {/* Coffee Dispenser */}
        <mesh position={[0, 1.1, 0.3]}>
          <cylinderGeometry args={[0.15, 0.15, 0.2, 32]} />
          <meshStandardMaterial color={'#A9A9A9'} />
        </mesh>

        {/* Cup Placement */}
        <mesh position={[0, 0.5, 0.3]}>
          <boxGeometry args={[0.5, 0.02, 0.4]} />
          <meshStandardMaterial color={'#555555'} />
        </mesh>

        {/* Cup (Ready to be filled) */}
        <mesh position={[0, 0.55, 0.3]}>
          <cylinderGeometry args={[0.12, 0.12, 0.4, 32]} />
          <meshStandardMaterial color={'#FFFFFF'} />
        </mesh>
      </group>

      {/* Cup Dispenser */}
      <mesh position={[0, 1.5, -0.5]}>
        <cylinderGeometry args={[0.2, 0.25, 1, 32]} />
        <meshStandardMaterial color={'#000000'} />
      </mesh>

      {/* Stack of Cups */}
      {[1, 1.2, 1.4].map((y, index) => (
        <mesh key={index} position={[0, y, -0.5]}>
          <cylinderGeometry args={[0.18, 0.18, 0.1, 32]} />
          <meshStandardMaterial color={'#FFFFFF'} />
        </mesh>
      ))}
    </group>
  );
}

export default CoffeeStation;
