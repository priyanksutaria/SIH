import React, { useRef, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Box, Sphere, Cylinder, Text } from '@react-three/drei';
import * as THREE from 'three';

export function Window({ position, rotation }) {
    const ref = useRef();
  
    useFrame(() => {
      if (rotation) {
        ref.current.rotation.y = Math.PI / 2;
        ref.current.rotation.z = Math.PI / 2; // Rotate 90 degrees around X-axis
      }
      else {
        ref.current.rotation.y = -Math.PI / 2; // Rotate 90 degrees around X-axis
        ref.current.rotation.x = Math.PI / 2;
      }
    });
  
    return (
      <group ref={ref} position={position}>
        {/* Window frame */}
        <Box args={[5.2, 2.7, 0.1]} position={[0, 2, 0]} castShadow>
          <meshStandardMaterial attach="material" color="#808080" />
        </Box>
        {/* Window glass */}
        <Box args={[5, 2.5, 0.1]} position={[0, 2, 0.01]} castShadow>
          <meshStandardMaterial attach="material" color="#ADD8E6" transparent opacity={0.5} />
        </Box>
        {/* Window border */}
        <Box args={[0.1, 2.7, 0.1]} position={[-2.6, 2, 0]} castShadow>
          <meshStandardMaterial attach="material" color="#808080" />
        </Box>
        <Box args={[0.1, 2.7, 0.1]} position={[2.6, 2, 0]} castShadow>
          <meshStandardMaterial attach="material" color="#808080" />
        </Box>
        <Box args={[5.2, 0.1, 0.1]} position={[0, 3.3, 0]} castShadow>
          <meshStandardMaterial attach="material" color="#808080" />
        </Box>
        <Box args={[5.2, 0.1, 0.1]} position={[0, 0.7, 0]} castShadow>
          <meshStandardMaterial attach="material" color="#808080" />
        </Box>
      </group>
    );
  }