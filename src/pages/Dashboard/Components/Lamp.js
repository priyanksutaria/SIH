import React, { useRef, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Box, Sphere, Cylinder, Text } from '@react-three/drei';
import * as THREE from 'three';

export function Lamp({ position }) {
    return (
      <group position={position}>
        <Cylinder args={[0.5, 0.5, 2, 32]} position={[0, 1, 0]} castShadow>
          <meshStandardMaterial attach="material" color="#C0C0C0" />
        </Cylinder>
        <Sphere args={[0.2, 32, 32]} position={[0, 2.5, 0]} castShadow>
          <meshStandardMaterial attach="material" color="#FFFF00" />
        </Sphere>
      </group>
    );
  }