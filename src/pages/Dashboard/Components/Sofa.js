import React, { useRef, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Box, Sphere, Cylinder, Text } from '@react-three/drei';
import * as THREE from 'three';

export function Sofa({ position }) {
  

  return (
    <group position={position} rotation={[0,-Math.PI/2,0]}>
      {/* Sofa Seat */}
      <mesh position={[0, 0.3, 0]}>
        <boxGeometry args={[4, 0.3, 1]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      
      {/* Backrest */}
      <mesh position={[0, 0.75, -0.4]}>
        <boxGeometry args={[4, 0.9, 0.2]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      
      {/* Left Armrest */}
      <mesh position={[-2.05, 0.6, 0]}>
        <boxGeometry args={[0.2, 0.6, 1]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      
      {/* Right Armrest */}
      <mesh position={[2.05, 0.6, 0]}>
        <boxGeometry args={[0.2, 0.6, 1]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
    </group>
  );
}

export function SofaTable({position}) {
  return (
    <group position={position} rotation={[0,Math.PI/2,0]}>
      {/* Tabletop */}
      <mesh position={[0, 0.2, 0]}>
        <boxGeometry args={[2, 0.05, 1]} />
        <meshStandardMaterial color="gray" transparent opacity={0.8} /> {/* Glass top */}
      </mesh>

      {/* Table legs */}
      <mesh position={[-0.9, 0.1, 0.45]}>
        <cylinderGeometry args={[0.05, 0.05, 0.4, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh position={[0.9, 0.1, 0.45]}>
        <cylinderGeometry args={[0.05, 0.05, 0.4, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh position={[-0.9, 0.1, -0.45]}>
        <cylinderGeometry args={[0.05, 0.05, 0.4, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh position={[0.9, 0.1, -0.45]}>
        <cylinderGeometry args={[0.05, 0.05, 0.4, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>
    </group>
  );
}

