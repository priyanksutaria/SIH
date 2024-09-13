import React, { useRef, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Box, Sphere, Cylinder, Text } from '@react-three/drei';
import * as THREE from 'three';

export function Section({ position, rotation }) {
    return (
      <group position={position} scale={[0.1, 1, 2]} rotation={rotation}>
        <Box args={[0.1, 5, 2]} castShadow>
          <meshStandardMaterial attach="material" color="#CCCCCC" />
        </Box>
      </group>
    );
  }