import React from 'react';
import { useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Ring } from '@react-three/drei';
import * as THREE from 'three';

export function GlowingRing({ position }) {
    const [glow, setGlow] = useState(0.5);
    const arrowRef = useRef();

    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.lineTo(0.5, 0.6); // Define triangle points
    shape.lineTo(-0.5, 0.6);
    shape.lineTo(0, 0);
    const extrudeSettings = { depth: 0.3, bevelEnabled: false };

    //Animate the glow and arrow rotation
    useFrame(() => {
        setGlow((prev) => (prev >= 1 ? 0.5 : prev + 0.01));

        // Rotate the arrow slowly
        if (arrowRef.current) {
            arrowRef.current.rotation.y += 0.02; // Adjust rotation speed here
        }
    });

    return (
        <group position={position}>
            {/* Glowing Ring */}
            <Ring args={[1.2, 1.6, 64]} rotation={[-Math.PI / 2, 0, 0]}>
                <meshStandardMaterial
                    color="yellow"
                    emissive="yellow"
                    emissiveIntensity={glow}
                    transparent
                    opacity={0.9}
                />
            </Ring>

            {/* Rotating Arrow */}
            <group ref={arrowRef} position={[0, 3, 0]} rotation={[0, 0, 0]}>
                {/* Arrow Shaft */}
                <mesh position={[0, -2, 0]} >
                    <boxGeometry args={[0.3, 1, 0.3]} />
                    <meshStandardMaterial color="yellow" />
                </mesh>

                <mesh position={[0, -3, -0.15]} rotation={[0, 0, 0]}>
                    <extrudeGeometry args={[shape, extrudeSettings]} />
                    <meshStandardMaterial color="yellow" />
                </mesh>
            </group>
        </group>
    );
}