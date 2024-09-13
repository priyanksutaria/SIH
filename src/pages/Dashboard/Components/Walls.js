import React, { useRef, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Box, Sphere, Cylinder, Text } from '@react-three/drei';
import * as THREE from 'three';

export function Walls() {
  return (
    <group>
      {/* Back Wall */}
      <Box args={[50, 10, 1]} position={[0, 5, -25]} castShadow>
        <meshStandardMaterial attach="material" color="#7C93BE" />
      </Box>
      {/* Left Wall */}
      <Box args={[1, 10, 50]} position={[-25, 5, 0]} castShadow>
        <meshStandardMaterial attach="material" color="#7C93BE" />
      </Box>
      {/* Right Wall */}
      <Box args={[1, 10, 50]} position={[25, 5, 0]} castShadow>
        <meshStandardMaterial attach="material" color="#7C93BE" />
      </Box>
      {/* Front Wall */}
      <Box args={[50, 10, 1]} position={[0, 5, 25]} castShadow>
        <meshStandardMaterial attach="material" color="#7C93BE" />
      </Box>
      {/*Center Walls*/}
      <Box args={[1, 10, 25]} position={[0, 5, 12]} castShadow>
        <meshStandardMaterial attach="material" color="#7C93BE" />
      </Box>
      <Box args={[1, 10, 20]} position={[4, 5, -14.5]} castShadow>
        <meshStandardMaterial attach="material" color="#7C93BE" />
      </Box>
      <Box args={[1, 4, 5]} position={[4,8,-2.5]} castShadow>
        <meshStandardMaterial attach="material" color="#7C93BE" />
      </Box>
      <Box args={[25, 10, 1]} position={[-12.5, 5, 0]} castShadow>
        <meshStandardMaterial attach="material" color="#7C93BE" />
      </Box>
      <Box args={[21, 10, 1]} position={[15, 5, -5]} castShadow>
        <meshStandardMaterial attach="material" color="#7C93BE" />
      </Box>
      <Box args={[5, 4, 1]} position={[2, 8, 0]} castShadow>
        <meshStandardMaterial attach="material" color="#7C93BE" />
      </Box>

      <Box args={[21, 4, 1]} position={[15, 8, 0]} castShadow>
        <meshStandardMaterial attach="material" color="#7C93BE" />
      </Box>
    </group>
  );
}