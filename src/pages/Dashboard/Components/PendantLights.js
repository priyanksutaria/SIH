import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import * as THREE from 'three';

export function PendantLight({ modelPath, materialPath, position }) {
  const ref = useRef();

  useEffect(() => {
    const mtlLoader = new MTLLoader();
    const objLoader = new OBJLoader();

    mtlLoader.load(materialPath, (materials) => {
      materials.preload();
      objLoader.setMaterials(materials);

      objLoader.load(modelPath, (obj) => {
        obj.scale.set(0.5, 0.5, 0.5); // Adjust the scale
        obj.position.set(...position);
        ref.current.add(obj);
      });
    });
  }, [modelPath, materialPath, position]);

  return <group ref={ref} />;
}