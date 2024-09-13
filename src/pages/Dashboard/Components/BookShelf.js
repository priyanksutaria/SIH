import React, { useRef, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Box, Sphere, Cylinder, Text } from '@react-three/drei';
import * as THREE from 'three';


export function Bookshelf({ position }) {
    return (
      <group position={position} rotation={[0,Math.PI/2,0]}>
        <Box args={[2, 4, 0.5]} position={[0, 2, 0]} castShadow>
          <meshStandardMaterial attach="material" color="#964B00" />
        </Box>
        <group>
          <Box args={[0.1, 0.5, 0.6]} position={[-0.1, 3.5, 0]} castShadow>
            <meshStandardMaterial attach="material" color="#FFD700" />
          </Box>
          <Box args={[0.1, 0.5, 0.6]} position={[0.1, 3.5, 0]} castShadow>
            <meshStandardMaterial attach="material" color="#FFD700" />
          </Box>
          <Box args={[0.1, 0.5, 0.6]} position={[-0.3, 3.5, 0]} castShadow>
            <meshStandardMaterial attach="material" color="#FFD700" />
          </Box>
          <Box args={[0.1, 0.5, 0.6]} position={[0.3, 3.5, 0]} castShadow>
            <meshStandardMaterial attach="material" color="#FFD700" />
          </Box>
          <Box args={[0.1, 0.5, 0.6]} position={[-0.5, 3.5, 0]} castShadow>
            <meshStandardMaterial attach="material" color="#FFD700" />
          </Box>
          <Box args={[0.1, 0.5, 0.6]} position={[0.5, 3.5, 0]} castShadow>
            <meshStandardMaterial attach="material" color="#FFD700" />
          </Box>
          <Box args={[0.1, 0.5, 0.6]} position={[-0.7, 3.5, 0]} castShadow>
            <meshStandardMaterial attach="material" color="#FFD700" />
          </Box>
          <Box args={[0.1, 0.5, 0.6]} position={[0.7, 3.5, 0]} castShadow>
            <meshStandardMaterial attach="material" color="#FFD700" />
          </Box>
        </group>
        <group>
          <Box args={[0.1, 0.5, 0.6]} position={[-0.1, 2.5, 0]} castShadow>
            <meshStandardMaterial attach="material" color="#FFD700" />
          </Box>
          <Box args={[0.1, 0.5, 0.6]} position={[0.1, 2.5, 0]} castShadow>
            <meshStandardMaterial attach="material" color="#FFD700" />
          </Box>
          <Box args={[0.1, 0.5, 0.6]} position={[-0.3, 2.5, 0]} castShadow>
            <meshStandardMaterial attach="material" color="#FFD700" />
          </Box>
          <Box args={[0.1, 0.5, 0.6]} position={[0.3, 2.5, 0]} castShadow>
            <meshStandardMaterial attach="material" color="#FFD700" />
          </Box>
          <Box args={[0.1, 0.5, 0.6]} position={[-0.5, 2.5, 0]} castShadow>
            <meshStandardMaterial attach="material" color="#FFD700" />
          </Box>
          <Box args={[0.1, 0.5, 0.6]} position={[0.5, 2.5, 0]} castShadow>
            <meshStandardMaterial attach="material" color="#FFD700" />
          </Box>
          <Box args={[0.1, 0.5, 0.6]} position={[-0.7, 2.5, 0]} castShadow>
            <meshStandardMaterial attach="material" color="#FFD700" />
          </Box>
          <Box args={[0.1, 0.5, 0.6]} position={[0.7, 2.5, 0]} castShadow>
            <meshStandardMaterial attach="material" color="#FFD700" />
          </Box>
        </group>
        <group>
          <Box args={[0.1, 0.5, 0.6]} position={[-0.1, 1.5, 0]} castShadow>
            <meshStandardMaterial attach="material" color="#FFD700" />
          </Box>
          <Box args={[0.1, 0.5, 0.6]} position={[0.1, 1.5, 0]} castShadow>
            <meshStandardMaterial attach="material" color="#FFD700" />
          </Box>
          <Box args={[0.1, 0.5, 0.6]} position={[-0.3, 1.5, 0]} castShadow>
            <meshStandardMaterial attach="material" color="#FFD700" />
          </Box>
          <Box args={[0.1, 0.5, 0.6]} position={[0.3, 1.5, 0]} castShadow>
            <meshStandardMaterial attach="material" color="#FFD700" />
          </Box>
          <Box args={[0.1, 0.5, 0.6]} position={[-0.5, 1.5, 0]} castShadow>
            <meshStandardMaterial attach="material" color="#FFD700" />
          </Box>
          <Box args={[0.1, 0.5, 0.6]} position={[0.5, 1.5, 0]} castShadow>
            <meshStandardMaterial attach="material" color="#FFD700" />
          </Box>
          <Box args={[0.1, 0.5, 0.6]} position={[-0.7, 1.5, 0]} castShadow>
            <meshStandardMaterial attach="material" color="#FFD700" />
          </Box>
          <Box args={[0.1, 0.5, 0.6]} position={[0.7, 1.5, 0]} castShadow>
            <meshStandardMaterial attach="material" color="#FFD700" />
          </Box>
        </group>
        <group>
          <Box args={[0.1, 0.5, 0.6]} position={[-0.1, 0.5, 0]} castShadow>
            <meshStandardMaterial attach="material" color="#FFD700" />
          </Box>
          <Box args={[0.1, 0.5, 0.6]} position={[0.1, 0.5, 0]} castShadow>
            <meshStandardMaterial attach="material" color="#FFD700" />
          </Box>
          <Box args={[0.1, 0.5, 0.6]} position={[-0.3, 0.5, 0]} castShadow>
            <meshStandardMaterial attach="material" color="#FFD700" />
          </Box>
          <Box args={[0.1, 0.5, 0.6]} position={[0.3, 0.5, 0]} castShadow>
            <meshStandardMaterial attach="material" color="#FFD700" />
          </Box>
          <Box args={[0.1, 0.5, 0.6]} position={[-0.5, 0.5, 0]} castShadow>
            <meshStandardMaterial attach="material" color="#FFD700" />
          </Box>
          <Box args={[0.1, 0.5, 0.6]} position={[0.5, 0.5, 0]} castShadow>
            <meshStandardMaterial attach="material" color="#FFD700" />
          </Box>
          <Box args={[0.1, 0.5, 0.6]} position={[-0.7, 0.5, 0]} castShadow>
            <meshStandardMaterial attach="material" color="#FFD700" />
          </Box>
          <Box args={[0.1, 0.5, 0.6]} position={[0.7, 0.5, 0]} castShadow>
            <meshStandardMaterial attach="material" color="#FFD700" />
          </Box>
        </group>
      </group>
    );
  }