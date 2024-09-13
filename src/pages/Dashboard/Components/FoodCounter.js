import React from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

// Load textures for more realism
const marbleTexture = '/assets/counter-texture.jpg'; // Replace with your actual texture path
const foodTexture = '/assets/food-texture.jpg'; // Replace with an actual food texture

function FoodCounter({ position }) {
  const marble = useLoader(TextureLoader, marbleTexture);
  const food = useLoader(TextureLoader, foodTexture);

  return (
    <group position={position}>
      {/* Food Counter */}
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[8, 1.2, 2.5]} />
        <meshStandardMaterial map={marble} />
      </mesh>

      {/* Food Trays */}
      {[[-3, 1.4, 0.8], [-1, 1.4, 0.8], [1, 1.4, 0.8], [3, 1.4, 0.8]].map(([x, y, z], index) => (
        <mesh key={index} position={[x, y, z]}>
          <boxGeometry args={[1.5, 0.1, 0.6]} />
          <meshStandardMaterial color={'#8B4513'} /> {/* Wooden Tray */}
        </mesh>
      ))}

      {/* Detailed Food (using textures for realism) */}
      {[[-3, 1.5, 0.8], [-1, 1.5, 0.8], [1, 1.5, 0.8], [3, 1.5, 0.8]].map(([x, y, z], index) => (
        <mesh key={index} position={[x, y, z]}>
          <planeGeometry args={[1.4, 0.5]} rotation={[-Math.PI / 2, 0, 0]} />
          <meshStandardMaterial map={food} />
        </mesh>
      ))}

      {/* Sneeze Guard Glass */}
      <mesh position={[0, 2, 0.8]}>
        <boxGeometry args={[8, 1.5, 0.05]} />
        <meshStandardMaterial color={'#87CEEB'} opacity={0.4} transparent />
      </mesh>

      {/* Serving Person */}
      <group position={[0, 0.8, -1.5]}>
        {/* Person Body */}
        <mesh position={[0, 1.2, 0]}>
          <cylinderGeometry args={[0.3, 0.4, 1.2, 32]} />
          <meshStandardMaterial color={'#FFDAB9'} /> {/* Skin tone */}
        </mesh>

        {/* Person Head */}
        <mesh position={[0, 2, 0]}>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshStandardMaterial color={'#FFDAB9'} />
        </mesh>

        {/* Shirt */}
        <mesh position={[0, 1, 0]}>
          <cylinderGeometry args={[0.35, 0.35, 0.6, 32]} />
          <meshStandardMaterial color={'#4682B4'} /> {/* Shirt color */}
        </mesh>

        {/* Apron */}
        <mesh position={[0, 1, 0.1]}>
          <boxGeometry args={[0.35, 0.6, 0.05]} />
          <meshStandardMaterial color={'#FFFFFF'} /> {/* White apron */}
        </mesh>

        {/* Arms */}
        {[[0.5, 1.5, 0], [-0.5, 1.5, 0]].map(([x, y, z], index) => (
          <mesh key={index} position={[x, y, z]}>
            <cylinderGeometry args={[0.1, 0.1, 0.7, 32]} />
            <meshStandardMaterial color={'#FFDAB9'} />
          </mesh>
        ))}

        {/* Serving Ladle */}
        <mesh position={[0.5, 1.3, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.4, 32]} />
          <meshStandardMaterial color={'#A9A9A9'} /> {/* Metal ladle */}
        </mesh>

        {/* Ladle Bowl */}
        <mesh position={[0.5, 1.2, 0.2]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color={'#A9A9A9'} />
        </mesh>
      </group>
    </group>
  );
}

export default FoodCounter;
