import React, { useRef, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Box, Sphere, Cylinder, Text, Html } from '@react-three/drei';
import * as THREE from 'three';
// import { checkTeleportZone } from './Teleportation';


export function Player({ onMove, detectionRadius, onSit, setPlayerReset, onNearDeskChange }) {
  const ref = useRef();
  const { camera, scene } = useThree();
  const [showTeleportEffect, setShowTeleportEffect] = useState(false);
  const speed = 0.1; // Movement speed
  const keys = useRef({ forward: false, backward: false, left: false, right: false });
  const [position, setPosition] = useState([-12.5, 2, 15]);

  const [isSitting, setIsSitting] = useState(false);
  const isSittingRef = useRef(false);

  const initialYPosition = useRef(null);
  const sittingAnimationProgress = useRef(0);
  const hasCalledOnSit = useRef(false);

  const [isNearDesk, setIsNearDesk] = useState(false);
  const isNearDeskRef = useRef(false);

  const teleportZones = [
    {
      from: new THREE.Box3(new THREE.Vector3(-2, 0, 4.5), new THREE.Vector3(0, 2, 5.5)),
      to: [3, 2, 5],
      hint: "Entering office room...",
    },
    {
      from: new THREE.Box3(new THREE.Vector3(0, 0, 4.5), new THREE.Vector3(2, 2, 5.5)),
      to: [-3, 2, 5],
      hint: "Entering reception room...",
    },
    {
      from: new THREE.Box3(new THREE.Vector3(14.5, 0, 0.5), new THREE.Vector3(16.5, 2, 1.5)),
      to: [19, 2, 0],
      hint: "Entering Manager's cabin...",
    },
    {
      from: new THREE.Box3(new THREE.Vector3(17, 0, 0.5), new THREE.Vector3(18, 2, 1.5)),
      to: [13.5, 2, 2],
      hint: "Entering office room..",
    },
  ];


  const deskPosition = [14, 0.1, 14]; // Position of the desk

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
        case 'KeyE':
          if (isNearDeskRef.current && !isSittingRef.current) {
            // Start sitting animation
            setIsSitting(true);
            initialYPosition.current = position[1];
            sittingAnimationProgress.current = 0; // Reset animation progress
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
  });

  useEffect(() => {
    isNearDeskRef.current = isNearDesk;
  }, [isNearDesk]);

  useEffect(() => {
    isSittingRef.current = isSitting;
  }, [isSitting]);

  useEffect(() => {
    if (setPlayerReset) {
      setPlayerReset(() => (newPosition) => {
        setPosition(newPosition);
        camera.position.set(newPosition[0], newPosition[1], newPosition[2]);

        // Reset sitting state
        setIsSitting(false);
        sittingAnimationProgress.current = 0;
        hasCalledOnSit.current = false;
      });
    }
  }, [setPlayerReset]);

  useFrame((state, delta) => {
    if (isSitting) {
      if (sittingAnimationProgress.current < 1) {
        sittingAnimationProgress.current += delta * 0.5; // Adjust speed as needed
        const targetY = initialYPosition.current - 1; // Amount to lower the Y position
        const newY = THREE.MathUtils.lerp(
          initialYPosition.current,
          targetY,
          sittingAnimationProgress.current
        );
        setPosition([position[0], newY, position[2]]);
        camera.position.set(position[0], newY, position[2]);
      } else {
        // Sitting animation complete
        if (onSit && !hasCalledOnSit.current) {
          onSit();
          hasCalledOnSit.current = true;
        }
      }
      const distanceFromDesk = Math.sqrt(
        Math.pow(position[0] - deskPosition[0], 2) +
        Math.pow(position[2] - deskPosition[2], 2)
      );

      if (distanceFromDesk > 2) { // Adjust the distance threshold as needed
        // Player has moved away from the desk, reset sitting state
        setIsSitting(false);
        sittingAnimationProgress.current = 0;
        hasCalledOnSit.current = false;
      }
      return; // Skip movement logic while sitting
    }
  });

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

    if (distanceToDesk < detectionRadius) {
      if (!isNearDesk) {
        setIsNearDesk(true);
        if (onNearDeskChange) {
          onNearDeskChange(true);
        }
      }
    } else {
      if (isNearDesk) {
        setIsNearDesk(false);
        if (onNearDeskChange) {
          onNearDeskChange(false);
        }
      }
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

      <mesh ref={ref} position={position} visible={false}>
        {/* Player representation - a simple box */}
        <Box args={[0.5, 1, 0.5]}>
          <meshStandardMaterial attach="material" color="#FF6347" />
        </Box>
      </mesh>
    </>
  );
}