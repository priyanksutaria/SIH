const teleportZones = [
    {
      from: new THREE.Box3(new THREE.Vector3(-1, 0, 4.5), new THREE.Vector3(0, 2, 5.5)),
      to: [0.8, 2, 5],
      hint: "Entering office room...",
    },
    {
        from: new THREE.Box3(new THREE.Vector3(15, 0, 5.5), new THREE.Vector3(16, 2, 6.5)),
        to: [17.5, 2, 5],
        hint: "Entering Manager's cabin...",
      },
  ];

  export const checkTeleportZone = (playerPosition, setPlayerPosition, setShowTeleportEffect, detectionRadius) => {
    for (let zone of teleportZones) {
      const distance = Math.sqrt(
        Math.pow(playerPosition[0] - zone.from[0], 2) +
        Math.pow(playerPosition[2] - zone.from[2], 2)
      );
  
      if (distance < detectionRadius) {
        // Trigger teleportation
        setShowTeleportEffect(true); // Show the black screen effect
        setTimeout(() => {
          setPlayerPosition(zone.to); // Teleport the player
          setShowTeleportEffect(false); // Remove black screen effect after teleport
        }, 500); // Wait 500ms for the fade effect
        return;
      }
    }
  };