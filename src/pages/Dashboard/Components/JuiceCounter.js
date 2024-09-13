import React from 'react';

function JuiceCounter({ position }) {
  return (
    <group position={position}>
      {/* Counter Base */}
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[6, 1, 2]} />
        <meshStandardMaterial color={'#8B4513'} /> {/* Wooden texture */}
      </mesh>

      {/* Juice Dispensers */}
      {[[-2.5, 1.6, 0.8], [-0.5, 1.6, 0.8], [1.5, 1.6, 0.8]].map(([x, y, z], index) => (
        <group key={index} position={[x, y, z]}>
          {/* Dispenser Body */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[0.6, 1.2, 0.6]} />
            <meshStandardMaterial color={'#F5F5F5'} />
          </mesh>

          {/* Juice Liquid */}
          <mesh position={[0, 0.7, 0]}>
            <cylinderGeometry args={[0.5, 0.5, 0.7, 32]} />
            <meshStandardMaterial color={index === 0 ? '#FFA500' : index === 1 ? '#FFFF00' : '#FF6347'} /> {/* Orange, Lemonade, Tomato Juice */}
          </mesh>

          {/* Dispenser Nozzle */}
          <mesh position={[0, -0.4, 0.3]}>
            <cylinderGeometry args={[0.05, 0.05, 0.2, 32]} />
            <meshStandardMaterial color={'#696969'} />
          </mesh>
        </group>
      ))}

      {/* Glasses (For serving) */}
      {[[-1.8, 1.6, 0.8], [0.2, 1.6, 0.8], [2.2, 1.6, 0.8]].map(([x, y, z], index) => (
        <mesh key={index} position={[x, y, z]}>
          <cylinderGeometry args={[0.15, 0.15, 0.3, 32]} />
          <meshStandardMaterial color={'#FFFFFF'} opacity={0.8} transparent />
        </mesh>
      ))}
    </group>
  );
}

export default JuiceCounter;
