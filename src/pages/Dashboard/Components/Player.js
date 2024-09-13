import React, { useRef, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Box, Sphere, Cylinder, Text, Html } from '@react-three/drei';
import * as THREE from 'three';
// import { checkTeleportZone } from './Teleportation';


export function Player({ onMove, detectionRadius, onSit }) {
  const ref = useRef();
  const { camera, scene } = useThree();
  const [position, setPosition] = useState([-12.5, 2, 15]); // Player starting position
  const [showTeleportEffect, setShowTeleportEffect] = useState(false);
  const [showSitHint, setShowSitHint] = useState(false); // Show hint to sit
  const [isSitting, setIsSitting] = useState(false); // Check if the player is sitting
  const speed = 0.1; // Movement speed
  const keys = useRef({ forward: false, backward: false, left: false, right: false });

  const teleportZones = [
    {
      from: new THREE.Box3(new THREE.Vector3(-2, 0, 4.5), new THREE.Vector3(0, 2, 5.5)),
      to: [3, 2, 5],
      hint: "Entering office room...",
    },
    {
      from: new THREE.Box3(new THREE.Vector3(0, 0, 4.5), new THREE.Vector3(2, 2, 5.5)),
      to: [-2, 2, 5],
      hint: "Entering reception room...",
    },
    {
      from: new THREE.Box3(new THREE.Vector3(14.5, 0, 5.5), new THREE.Vector3(16.5, 2, 6.5)),
      to: [19, 2, 5],
      hint: "Entering Manager's cabin...",
    },
    {
      from: new THREE.Box3(new THREE.Vector3(17, 0, 5.5), new THREE.Vector3(18, 2, 6.5)),
      to: [14.5, 2, 5],
      hint: "Entering office room..",
    },
  ];


  const deskPosition = [14, 0.1, 14]; // Position of the desk
  const sitKey = 'KeyE'; // Key to trigger sitting

  const checkTeleportZone = () => {
    const playerBox = new THREE.Box3().setFromObject(ref.current); // Create Box3 around player

    for (let zone of teleportZones) {
      if (playerBox.intersectsBox(zone.from)) {
        // Player enters teleport zone
        setShowTeleportEffect(true); // Show black screen
        setTimeout(() => {
          setPosition(zone.to); // Teleport player
          camera.position.set(...zone.to);
          setShowTeleportEffect(false); // Remove black screen effect after teleport
        }, 100); // Wait 500ms for the fade effect
        return;
      }
    }
  };


  const handleSitting = () => {
    // Animate camera to zoom in on the desk/PC
    setIsSitting(true);
    setTimeout(() => {
      setShowTeleportEffect(true); // Fade to black
      setTimeout(() => {
        onSit(); // Call the callback for showing the task screen
      }, 1000); // Delay before showing the daily task screen
    }, 1500); // Sitting animation duration
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.code) {
        case 'KeyW':
          keys.current.forward = true;
          break;
        case 'KeyS':
          keys.current.backward = true;
          break;
        case 'KeyA':
          keys.current.left = true;
          break;
        case 'KeyD':
          keys.current.right = true;
          break;
        case sitKey: // Check if the player presses the sit key
          if (showSitHint && !isSitting) {
            handleSitting();
          }
          break;
        default:
          break;
      }
    };

    const handleKeyUp = (event) => {
      switch (event.code) {
        case 'KeyW':
          keys.current.forward = false;
          break;
        case 'KeyS':
          keys.current.backward = false;
          break;
        case 'KeyA':
          keys.current.left = false;
          break;
        case 'KeyD':
          keys.current.right = false;
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [showSitHint, isSitting]);

  // Movement logic and collision detection
  useFrame(() => {
    const direction = new THREE.Vector3();
    camera.getWorldDirection(direction);
    direction.y = 0;

    const right = new THREE.Vector3().crossVectors(camera.up, direction).normalize();
    const forward = direction.clone().normalize();

    let moveVector = new THREE.Vector3();

    if (keys.current.forward) moveVector.add(forward);
    if (keys.current.backward) moveVector.sub(forward);
    if (keys.current.left) moveVector.add(right);
    if (keys.current.right) moveVector.sub(right);

    moveVector.normalize().multiplyScalar(speed);

    const newPosition = [position[0] + moveVector.x, position[1], position[2] + moveVector.z];

    // Update position
    setPosition(newPosition);
    camera.position.set(newPosition[0], newPosition[1], newPosition[2]);

    // Check for proximity to the desk for sitting
    const distanceToDesk = Math.sqrt(
      Math.pow(newPosition[0] - deskPosition[0], 2) + Math.pow(newPosition[2] - deskPosition[2], 2)
    );

    if (distanceToDesk < 1.5 && !isSitting) {
      setShowSitHint(true);
    } else {
      setShowSitHint(false);
    }

    checkTeleportZone();

    // Notify parent of movement
    if (onMove) {
      onMove(newPosition);
    }
  });

  return (
    <>
      {/* Black screen effect for teleportation */}
      {showTeleportEffect && (
        <Html style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'black',
          opacity: 0.8,
          transition: 'opacity 0.5s ease-in-out',
        }}></Html>
      )}

      {/* Sit hint text */}
      {showSitHint && !isSitting && (
        <Html style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          fontSize: '24px',
        }}>
          Press 'E' to sit
        </Html>
      )}

      <mesh ref={ref} position={position} visible={false}>
        {/* Player representation - a simple box */}
        <Box args={[0.5, 1, 0.5]}>
          <meshStandardMaterial attach="material" color="#FF6347" />
        </Box>
      </mesh>
    </>
  );
}