import React, { Suspense } from 'react';
import { useState } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { Plane, Text, PointerLockControls, Box, useGLTF } from '@react-three/drei';

export function CafeteriaModel({ modelUrl, position, scale }) {
    // Load the GLTF model
    const { scene } = useGLTF(modelUrl);
  
    return (
      <primitive object={scene} position={position} scale={scale} />
    );
  }