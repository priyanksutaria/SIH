import React from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

const snackTexture = '/assets/snack-texture.png'; // Replace with snack images

function VendingMachine({ position, rotation }) {
  const snack = useLoader(TextureLoader, snackTexture);

  return (
    <group position={position} rotation={rotation}>
      {/* Vending Machine Body (back, sides, and top) */}
      <mesh position={[0, 1.5, 0]}>
        <boxGeometry args={[1.2, 3, 0.8]} />
        <meshStandardMaterial color={'#333333'} />
      </mesh>

      {/* Transparent Glass Front */}
      <mesh position={[0, 1.5, 0.4]}>
        <boxGeometry args={[1, 2.8, 0.05]} />
        <meshStandardMaterial color={'#87CEEB'} opacity={0.3} transparent /> {/* Transparent glass */}
      </mesh>

      {/* Snack and Beverage Rows Inside */}
      {[[-0.3, 2.6, 0.16], [0.3, 2.6, 0.16],[-0.3, 2.2, 0.16], [0.3, 2.2, 0.16], [-0.3, 1.8, 0.16], [0.3, 1.8, 0.16], [-0.3, 1.4, 0.16], [0.3, 1.4, 0.16]].map(([x, y, z], index) => (
        <mesh key={index} position={[x, y, z]} rotation={[0,Math.PI/2,0]}>
          <boxGeometry args={[0.5, 0.3, 0.3]} />
          <meshStandardMaterial map={snack} /> {/* Snack images */}
        </mesh>
      ))}

      {/* Coin Slot */}
      <mesh position={[0.6, 1.6, 0.5]}>
        <boxGeometry args={[0.1, 0.1, 0.05]} />
        <meshStandardMaterial color={'#555555'} />
      </mesh>

      {/* Keypad */}
      <mesh position={[0.6, 1.2, 0.5]}>
        <boxGeometry args={[0.2, 0.3, 0.05]} />
        <meshStandardMaterial color={'#555555'} />
      </mesh>
      <mesh position={[0, 0.8, 0.5]}>
        <boxGeometry args={[0.8, 0.3, 0.05]} />
        <meshStandardMaterial color={'#555555'} />
      </mesh>
    </group>
  );
}

export default VendingMachine;
