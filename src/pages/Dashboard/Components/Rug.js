import React, { useRef, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Box, Sphere, Cylinder, Text } from '@react-three/drei';
import * as THREE from 'three';

export function Rug({ position }) {
    return (
      <group position={position}>
        <Box args={[8, 0.1, 8]} position={[0, 0, 0]} castShadow>
          <meshStandardMaterial attach="material" color="#c32a2a" />
        </Box>
      </group>
    );
  }