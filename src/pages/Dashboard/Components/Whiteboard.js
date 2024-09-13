import React, { useRef, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Box, Sphere, Cylinder, Text } from '@react-three/drei';
import * as THREE from 'three';

export function Whiteboard({ position, rotation }) {
  
    return (
      <group position={position} rotation={rotation}>
        {/* Whiteboard Frame */}
        <Box args={[6, 3, 0.1]} position={[0, 1, 0]} castShadow>
          <meshStandardMaterial attach="material" color="#FFFFFF" />
        </Box>
        {/* Stand */}
        <Box args={[0.1, 0.5, 0.1]} position={[-1.4, -0.5, -0.05]} castShadow>
          <meshStandardMaterial attach="material" color="#000000" />
        </Box>
        <Box args={[0.1, 0.5, 0.1]} position={[1.4, -0.5, -0.05]} castShadow>
          <meshStandardMaterial attach="material" color="#000000" />
        </Box>
        {/*Border*/}
        <Box args={[0.1, 3, 0.1]} position={[-3, 1, -0.05]} castShadow>
          <meshStandardMaterial attach="material" color="#000000" />
        </Box>
        <Box args={[0.1, 3, 0.1]} position={[3, 1, -0.05]} castShadow>
          <meshStandardMaterial attach="material" color="#000000" />
        </Box>
        <Box args={[6, 0.1, 0.1]} position={[0, -0.5, -0.05]} castShadow>
          <meshStandardMaterial attach="material" color="#000000" />
        </Box>
        <Box args={[6, 0.1, 0.1]} position={[0, 2.5, -0.05]} castShadow>
          <meshStandardMaterial attach="material" color="#000000" />
        </Box>
        {/* Duster */}
        <Box args={[0.2, 0.5, 0.2]} position={[2.5, 1, -0.05]} castShadow>
          <meshStandardMaterial attach="material" color="#964B00" />
        </Box>
      </group>
    );
  }