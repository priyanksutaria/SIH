import React from 'react';
import { useTexture } from '@react-three/drei';

export function OfficeDesk({ position, rotation }) {
  // Load textures
  const woodTexture = useTexture('/assets/wood-texture.jpg'); // Texture for a wooden desk
  const metalTexture = useTexture('/assets/metal-texture.jpg'); // Texture for metallic parts
  const paperTexture = useTexture('/assets/paper-texture.jpg'); // Texture for papers/files
  const chairTexture = useTexture('/assets/chair-texture.jpg'); // Texture for the chair

  return (
    <group position={position} rotation={rotation}>
      {/* Desk Top */}
      <mesh position={[0, 0.75, 0]}>
        <boxGeometry args={[2.2, 0.1, 1.2]} /> {/* Width: 2.2, Height: 0.1, Depth: 1.2 */}
        <meshStandardMaterial map={woodTexture} />
      </mesh>

      {/* Desk Legs (4 legs) */}
      <mesh position={[-0.9, 0.35, -0.55]}>
        <boxGeometry args={[0.1, 0.7, 0.1]} /> {/* Left front leg */}
        <meshStandardMaterial map={metalTexture} />
      </mesh>
      <mesh position={[0.9, 0.35, -0.55]}>
        <boxGeometry args={[0.1, 0.7, 0.1]} /> {/* Right front leg */}
        <meshStandardMaterial map={metalTexture} />
      </mesh>
      <mesh position={[-0.9, 0.35, 0.55]}>
        <boxGeometry args={[0.1, 0.7, 0.1]} /> {/* Left back leg */}
        <meshStandardMaterial map={metalTexture} />
      </mesh>
      <mesh position={[0.9, 0.35, 0.55]}>
        <boxGeometry args={[0.1, 0.7, 0.1]} /> {/* Right back leg */}
        <meshStandardMaterial map={metalTexture} />
      </mesh>

      {/* File Cabinet under desk (3 drawers) */}
      <mesh position={[0.7, 0.35, 0.4]}>
        <boxGeometry args={[0.4, 0.7, 0.6]} /> {/* File Cabinet */}
        <meshStandardMaterial map={woodTexture} />
      </mesh>
      <mesh position={[0.7, 0.55, 0.55]}>
        <boxGeometry args={[0.35, 0.1, 0.05]} /> {/* Top drawer handle */}
        <meshStandardMaterial color={'#333'} />
      </mesh>
      <mesh position={[0.7, 0.35, 0.55]}>
        <boxGeometry args={[0.35, 0.1, 0.05]} /> {/* Bottom drawer handle */}
        <meshStandardMaterial color={'#333'} />
      </mesh>
      <mesh position={[0.7, 0.15, 0.55]}>
        <boxGeometry args={[0.35, 0.1, 0.05]} /> {/* Lower drawer handle */}
        <meshStandardMaterial color={'#333'} />
      </mesh>

      {/* Computer Setup */}
      <mesh position={[-0.3, 1.0, 0.2]}>
        <boxGeometry args={[0.7, 0.4, 0.05]} /> {/* Monitor */}
        <meshStandardMaterial color={'#000'} />
      </mesh>
      <mesh position={[-0.3, 0.85, 0.2]}>
        <boxGeometry args={[0.1, 0.15, 0.05]} /> {/* Monitor stand */}
        <meshStandardMaterial map={metalTexture} />
      </mesh>
      <mesh position={[-0.3, 0.78, 0.4]}>
        <boxGeometry args={[0.6, 0.05, 0.2]} /> {/* Keyboard */}
        <meshStandardMaterial color={'#555'} />
      </mesh>
      <mesh position={[-0.15, 0.73, 0.3]}>
        <boxGeometry args={[0.15, 0.15, 0.4]} /> {/* CPU under the desk */}
        <meshStandardMaterial color={'#333'} />
      </mesh>

      {/* Office Chair */}
      <group position={[-0.5, 0.35, -0.8]}>
        <mesh>
          <boxGeometry args={[0.6, 0.1, 0.6]} /> {/* Chair seat */}
          <meshStandardMaterial map={chairTexture} />
        </mesh>
        <mesh position={[0, 0.4, 0]}>
          <boxGeometry args={[0.6, 0.7, 0.05]} /> {/* Chair backrest */}
          <meshStandardMaterial map={chairTexture} />
        </mesh>
        <mesh position={[0, -0.25, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.5, 32]} /> {/* Chair stem */}
          <meshStandardMaterial map={metalTexture} />
        </mesh>
        {[[-0.3, -0.5, -0.3], [0.3, -0.5, -0.3], [0.3, -0.5, 0.3], [-0.3, -0.5, 0.3]].map((pos, index) => (
          <mesh key={index} position={pos}>
            <boxGeometry args={[0.05, 0.05, 0.1]} /> {/* Chair legs */}
            <meshStandardMaterial color={'#333'} />
          </mesh>
        ))}
      </group>

      {/* Office Supplies */}
      <mesh position={[-0.8, 0.78, -0.4]}>
        <cylinderGeometry args={[0.05, 0.05, 0.15, 32]} /> {/* Pen holder */}
        <meshStandardMaterial color={'#222'} />
      </mesh>
      <mesh position={[-0.6, 0.78, -0.4]}>
        <boxGeometry args={[0.3, 0.05, 0.4]} /> {/* Notebook */}
        <meshStandardMaterial color={'#7b3e19'} />
      </mesh>
      <mesh position={[-0.6, 0.8, -0.2]}>
        <boxGeometry args={[0.4, 0.01, 0.6]} /> {/* File stack */}
        <meshStandardMaterial map={paperTexture} />
      </mesh>

      {/* Coffee Cup */}
      <mesh position={[-0.4, 0.82, 0.5]}>
        <cylinderGeometry args={[0.05, 0.05, 0.1, 32]} /> {/* Cup */}
        <meshStandardMaterial color={'#fff'} />
      </mesh>
    </group>
  );
}
