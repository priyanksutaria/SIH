import React, { useRef, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Box, Sphere, Cylinder, Text } from '@react-three/drei';
import * as THREE from 'three';

export function Door({ position, rotation }) {
    return (
      <group position={position} rotation={rotation}>
        <Box args={[2, 4, 0.1]} position={[0, 2, 0]} castShadow>
          <meshStandardMaterial attach="material" color="#A52A2A" />
        </Box>
        <Box args={[0.2, 0.2, 0.2]} position={[0.8, 2, 0]} castShadow>
          <meshStandardMaterial attach="material" color="#000000" />
        </Box>
      </group>
    );
  }