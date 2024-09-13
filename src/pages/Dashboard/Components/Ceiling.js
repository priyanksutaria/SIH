import React, { useRef, useEffect, useState } from 'react';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import { Box, Sphere, Cylinder, Text, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export function Ceiling({position, scale}) {
  const modelUrl= "/model/ceiling.glb"
  const {scene} = useGLTF(modelUrl)
  return(
    <primitive object={scene} position={position} scale={scale} />
  );
} 

export function Ceiling1({position, scale}) {
  const modelUrl= "/model/ceiling1.glb"
  const {scene} = useGLTF(modelUrl)
  return(
    <primitive object={scene} position={position} scale={scale} />
  );
} 

export function Ceiling2({position, scale}) {
  const modelUrl= "/model/ceiling2.glb"
  const {scene} = useGLTF(modelUrl)
  return(
    <primitive object={scene} position={position} scale={scale} />
  );
} 

export function Ceiling3({position, scale}) {
  const modelUrl= "/model/ceiling3.glb"
  const {scene} = useGLTF(modelUrl)
  return(
    <primitive object={scene} position={position} scale={scale} />
  );
} 

export function Ceiling4({position, scale}) {
  const modelUrl= "/model/ceiling4.glb"
  const {scene} = useGLTF(modelUrl)
  return(
    <primitive object={scene} position={position} scale={scale} />
  );
} 