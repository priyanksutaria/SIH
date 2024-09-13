import React from 'react';
import { useTexture, useGLTF } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import { Suspense } from 'react';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { rotate } from 'three/webgpu';

function Office({ modelUrl, position, scale }) {
  const { scene } = useGLTF(modelUrl); // Load the GLTF model
  return <primitive object={scene} position={position} scale={scale} />;
}

function FBXModel({ modelUrl, position, scale = 0.01 }) {
  // Load the FBX model
  const fbx = useLoader(FBXLoader, modelUrl);

  return <primitive object={fbx} rotation={[0, Math.PI / 2, 0]} position={position} scale={scale} />;
}

// Desk Component (for the manager's office)
function ManagerDesk({ position }) {
  const woodTexture = useTexture('/assets/wood-texture.jpg');
  const metalTexture = useTexture('/assets/metal-texture.jpg');

  return (
    <group position={position}>
      {/* Larger Desk Top */}
      <mesh position={[0, 0.8, 0]}>
        <boxGeometry args={[3, 0.1, 1.5]} />
        <meshStandardMaterial map={woodTexture} />
      </mesh>

      {/* Desk Legs */}
      <mesh position={[-1.4, 0.35, -0.7]}>
        <boxGeometry args={[0.15, 0.7, 0.15]} />
        <meshStandardMaterial map={metalTexture} />
      </mesh>
      <mesh position={[1.4, 0.35, -0.7]}>
        <boxGeometry args={[0.15, 0.7, 0.15]} />
        <meshStandardMaterial map={metalTexture} />
      </mesh>
      <mesh position={[-1.4, 0.35, 0.7]}>
        <boxGeometry args={[0.15, 0.7, 0.15]} />
        <meshStandardMaterial map={metalTexture} />
      </mesh>
      <mesh position={[1.4, 0.35, 0.7]}>
        <boxGeometry args={[0.15, 0.7, 0.15]} />
        <meshStandardMaterial map={metalTexture} />
      </mesh>

      {/* Drawers */}
      <mesh position={[1.2, 0.4, 0.4]}>
        <boxGeometry args={[0.5, 0.6, 0.6]} />
        <meshStandardMaterial map={woodTexture} />
      </mesh>
      <mesh position={[1.2, 0.55, 0.55]}>
        <boxGeometry args={[0.45, 0.1, 0.05]} />
        <meshStandardMaterial color={'#333'} />
      </mesh>
      <mesh position={[1.2, 0.35, 0.55]}>
        <boxGeometry args={[0.45, 0.1, 0.05]} />
        <meshStandardMaterial color={'#333'} />
      </mesh>

      {/* Monitor */}
      <mesh position={[-0.6, 1.05, 0.1]}>
        <boxGeometry args={[0.8, 0.5, 0.05]} />
        <meshStandardMaterial color={'#000'} />
      </mesh>
      <mesh position={[-0.6, 0.85, 0.1]}>
        <boxGeometry args={[0.1, 0.2, 0.05]} />
        <meshStandardMaterial map={metalTexture} />
      </mesh>

      {/* Keyboard */}
      <mesh position={[-0.6, 0.8, 0.4]}>
        <boxGeometry args={[0.7, 0.05, 0.25]} />
        <meshStandardMaterial color={'#555'} />
      </mesh>

      {/* Office Chair */}
      <mesh position={[-1, 0.5, -0.6]}>
        <cylinderGeometry args={[0.3, 0.3, 0.5, 32]} />
        <meshStandardMaterial color={'#333'} />
      </mesh>
      <mesh position={[-1, 0.8, -0.6]}>
        <boxGeometry args={[0.5, 0.2, 0.3]} />
        <meshStandardMaterial color={'#333'} />
      </mesh>

      {/* Bookshelf */}
      <mesh position={[1.8, 0.75, 0]}>
        <boxGeometry args={[0.5, 1.0, 0.2]} />
        <meshStandardMaterial map={woodTexture} />
      </mesh>
      <mesh position={[1.8, 1.2, -0.05]}>
        <boxGeometry args={[0.45, 0.1, 0.1]} />
        <meshStandardMaterial color={'#888'} />
      </mesh>
      <mesh position={[1.8, 0.9, -0.05]}>
        <boxGeometry args={[0.45, 0.1, 0.1]} />
        <meshStandardMaterial color={'#888'} />
      </mesh>

      {/* Artwork */}
      <mesh position={[-1.8, 3, -3.8]}>
        <boxGeometry args={[2, 2, 0.02]} />
        <meshStandardMaterial map={useTexture('/assets/artwork.png')} />
      </mesh>
    </group>
  );
}

// Manager's Office Component
function ManagersOffice({ position }) {
  return (
    <group position={position} rotation={[0, -Math.PI / 2, 0]}>

      <Box args={[8, 12, 0.2]} position={[0,0,-4]} castShadow>
        <meshStandardMaterial attach="material" color="#f5f5f5" />
      </Box>
      <Box args={[8, 12, 0.2]} position={[0,0,4]} castShadow>
        <meshStandardMaterial attach="material" color="#f5f5f5" />
      </Box>
      <Box args={[0.2, 12, 8]} position={[4,0,0]} castShadow>
        <meshStandardMaterial attach="material" color="#f5f5f5" />
      </Box>
      <Box args={[0.2, 12, 8]} position={[-4,0,0]} castShadow>
        <meshStandardMaterial attach="material" color="#f5f5f5" />
      </Box>
      <Box args={[8, 0.2, 8]} position={[0,6,0]} castShadow>
        <meshStandardMaterial attach="material" color="#f0e6d6" />
      </Box>
      {/* Office Desk */}
      <ManagerDesk position={[0, 0, 0]} />

      <Suspense fallback={null}>
        <FBXModel
          modelUrl="/model/manager.fbx"
          position={[-1, 0, -1]}  // Set the position of the model
          scale={0.0007}          // Adjust the scale of the model
        />
      </Suspense>
      {/* <Suspense fallback={null}>
        <Office modelUrl="/model/manageroffice.glb" position={[[20.5, 0, 4.5]]} scale={[0.1,0.1,0.1]} />
      </Suspense> */}
      {/* More Components like Sofa, Coffee Table, etc. */}
      <mesh position={[-3, 0, 0]}>
        <boxGeometry args={[1, 0.1, 1]} />
        <meshStandardMaterial color={'#ddd'} />
      </mesh>

      <mesh position={[3, 0, 0]}>
        <boxGeometry args={[1, 0.1, 1]} />
        <meshStandardMaterial color={'#ddd'} />
      </mesh>

      {/* Example of a more realistic layout */}
      {/* You can adjust and add more components such as a sofa, coffee table, etc. */}
    </group>
  );
}

export function ManagerDoor({ position, rotation }) {
  return (
    <group position={position} rotation={rotation}>
      <Box args={[1.5, 3, 0.1]} position={[0, 1.5, 0]} castShadow>
        <meshStandardMaterial attach="material" color="#A52A2A" />
      </Box>
      <Box args={[0.15, 0.15, 0.15]} position={[0.4, 1.5, 0]} castShadow>
        <meshStandardMaterial attach="material" color="#000000" />
      </Box>
    </group>
  );
}

export default ManagersOffice;
