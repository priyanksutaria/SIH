import React from 'react';

export function CoffeeTable({position}) {
  return (
    <group position={position}>
      {/* Tabletop */}
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[1, 0.05, 1]} />
        <meshStandardMaterial color="gray" transparent opacity={0.8} /> {/* Glass top */}
      </mesh>

      {/* Table legs */}
      <mesh position={[-0.4, 0.1, 0.45]}>
        <cylinderGeometry args={[0.05, 0.05, 2, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh position={[0.4, 0.1, 0.45]}>
        <cylinderGeometry args={[0.05, 0.05, 2, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh position={[-0.4, 0.1, -0.45]}>
        <cylinderGeometry args={[0.05, 0.05, 2, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh position={[0.4, 0.1, -0.45]}>
        <cylinderGeometry args={[0.05, 0.05, 2, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>
    </group>
  );
}

function CoffeeMachine({position}) {
  return (
    <group position={position}>
      {/* Main Body */}
      <mesh position={[0, 0.3, 0]}>
        <boxGeometry args={[0.6, 0.8, 0.4]} />
        <meshStandardMaterial color="darkgray" />
      </mesh>

      {/* Coffee Spout */}
      <mesh position={[0, 0, 0.2]}>
        <cylinderGeometry args={[0.05, 0.05, 0.2, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>

      {/* Panel Area */}
      <mesh position={[0, 0.5, 0.25]}>
        <boxGeometry args={[0.3, 0.4, 0.05]} />
        <meshStandardMaterial color="lightgray" />
      </mesh>

      {/* Buttons */}
      <mesh position={[-0.1, 0.65, 0.28]}>
        <boxGeometry args={[0.05, 0.05, 0.02]} />
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh position={[0.1, 0.65, 0.28]}>
        <boxGeometry args={[0.05, 0.05, 0.02]} />
        <meshStandardMaterial color="green" />
      </mesh>

      {/* Coffee Tray */}
      <mesh position={[0, -0.3, 0.2]}>
        <boxGeometry args={[0.4, 0.05, 0.25]} />
        <meshStandardMaterial color="black" />
      </mesh>
    </group>
  );
}

export default CoffeeMachine;

