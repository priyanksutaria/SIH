import React from 'react';
import { Sphere } from '@react-three/drei';



export function PottedPlant({ position }) {
  return (
    <group position={position}>
      {/* Pot */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.5, 0.4, 0.8, 32]} />
        <meshStandardMaterial color={'#964B00'} />
      </mesh>

      {/* Plant Leaves */}
      {/* {[[-0.3, 1.2, 0], [0.3, 1.2, 0], [0, 1.2, -0.3], [0, 1.2, 0.3]].map(([x, y, z], index) => (
        <mesh key={index} position={[x, y, z]}>
          <planeGeometry args={[0.5, 1]} />
          <meshStandardMaterial color={'#32CD32'} />
        </mesh>
      ))} */}
      <Sphere args={[0.5, 32, 32]} position={[0, 1, 0]}>
          <meshStandardMaterial attach="material" color="#228B22" />
        </Sphere>
      
    </group>
  );
}
