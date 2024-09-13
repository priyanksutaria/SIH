import React, { useRef, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Box, Sphere, Cylinder, Text } from '@react-three/drei';
import * as THREE from 'three';

export function SmallSofa1({ position }) {
  

  return (
    <group position={position} rotation={[0,0,0]}>
      {/* Sofa Seat */}
      <mesh position={[0, 0.3, 0]}>
        <boxGeometry args={[1, 0.3, 1]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      
      {/* Backrest */}
      <mesh position={[0, 0.75, -0.4]}>
        <boxGeometry args={[1, 0.9, 0.2]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      
      {/* Left Armrest */}
      <mesh position={[-0.55, 0.6, 0]}>
        <boxGeometry args={[0.2, 0.6, 1]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      
      {/* Right Armrest */}
      <mesh position={[0.55, 0.6, 0]}>
        <boxGeometry args={[0.2, 0.6, 1]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
    </group>
  );
}

export function SmallSofa2({ position }) {
  

    return (
      <group position={position} rotation={[0,Math.PI,0]}>
        {/* Sofa Seat */}
        <mesh position={[0, 0.3, 0]}>
          <boxGeometry args={[1, 0.3, 1]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
        
        {/* Backrest */}
        <mesh position={[0, 0.75, -0.4]}>
          <boxGeometry args={[1, 0.9, 0.2]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
        
        {/* Left Armrest */}
        <mesh position={[-0.55, 0.6, 0]}>
          <boxGeometry args={[0.2, 0.6, 1]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
        
        {/* Right Armrest */}
        <mesh position={[0.55, 0.6, 0]}>
          <boxGeometry args={[0.2, 0.6, 1]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
      </group>
    );
  }