import React, { useRef, useEffect, useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { Suspense } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Box, Sphere, Cylinder, Text } from '@react-three/drei';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { TextureLoader } from 'three';

function FBXModel({ modelUrl, textureUrls, position, scale = 0.01 }) {
  // Load the FBX model
  const fbx = useLoader(FBXLoader, modelUrl);

  const [diffuse2k, diffuse8k, normal2k, normal8k, specHair, specFabric, specLeather, specPants] = useLoader(TextureLoader, textureUrls);

  // Apply textures to the model's meshes
  fbx.traverse((child) => {
    if (child.isMesh) {
      child.material.map = diffuse2k || diffuse8k; // Apply the diffuse (albedo) map
      child.material.normalMap = normal2k || normal8k; // Apply the normal map
      child.material.specularMap = specFabric || specLeather || specHair || specPants; // Apply specular maps based on mesh part
      child.material.needsUpdate = true;
    }
  });

  return <primitive object={fbx} rotation={[0,0,0]} position={position} scale={scale} />;
}


export function Reception({ position }) {
    return (
      <group position={position}>
        <Box args={[4, 2, 1]} position={[0, 0, 0]} castShadow>
          <meshStandardMaterial attach="material" color="#A9A9A9" />
        </Box>
        <Box args={[4, 0.1, 1.5]} position={[0, 0.7, -1.25]} castShadow>
          <meshStandardMaterial attach="material" color="#8B4513" />
        </Box>
        <Box args={[1, 1, 2.5]} position={[2.5, 0.5, -1.75]} castShadow>
          <meshStandardMaterial attach="material" color="#A9A9A9" />
        </Box>
        <Box args={[1, 1, 2.5]} position={[-2.5, 0.5, -1.75]} castShadow>
          <meshStandardMaterial attach="material" color="#A9A9A9" />
        </Box>
        <Box args={[2, 0.5, 0.1]} position={[0, 1, -0.5]} castShadow>
          <meshStandardMaterial attach="material" color="#A9A9A9" />
        </Box>
        <Text
          position={[0, 0.6, 0.6]}
          fontSize={0.3}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          Reception
        </Text>
        <Box args={[1, 0.1, 1.2]} position={[0, 1, 0.2]} castShadow>
          <meshStandardMaterial attach="material" color="#000000" />
        </Box>
  
        {/* Computer Table */}
        <Box args={[2, 0.5, 1.2]} position={[0, 1, 0.1]} castShadow>
          <meshStandardMaterial attach="material" color="#808080" />
        </Box>
        <Suspense fallback={null}>
            <FBXModel
              modelUrl="/model/women/women.fbx"
              textureUrls={[
            '/model/women/rp_mei_posed_001_dif_2k.jpg',          // Diffuse 2k texture
            '/model/women/rp_mei_posed_001_dif_8k.jpg',          // Diffuse 8k texture
            '/model/women/rp_mei_posed_001_norm_2k.jpg',         // Normal 2k texture
            '/model/women/rp_mei_posed_001_norm_8k.jpg',         // Normal 8k texture
            '/model/women/rp_mei_posed_001_spec_hair01.jpg',     // Specular map for hair
            '/model/women/rp_mei_posed_001_spec_shirt_fabric01.jpg', // Specular map for shirt fabric
            '/model/women/rp_mei_posed_001_spec_shoes_leather01.jpg', // Specular map for leather shoes
            '/model/women/rp_mei_posed_001_spec_pants_fabric02.jpg'   // Specular map for pants fabric
          ]}
              position={[0, 0, -2.3]}  // Set the position of the model
              scale={0.015}          // Adjust the scale of the model
            />
          </Suspense>
        
      </group>
    );
  }