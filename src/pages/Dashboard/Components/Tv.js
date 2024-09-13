import React from "react";

export function TV ({position})  {
  return (
    <group position={position} rotation={[0,Math.PI/2,0]}>
      {/* TV Screen */}
      <mesh position={[0, 2, 0]}>
        <boxGeometry args={[4, 2.5, 0.1]} />
        <meshStandardMaterial color="black" />
      </mesh>

      {/* TV Stand */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[1.5, 0.1, 0.8]} />
        <meshStandardMaterial color="#303030" />
      </mesh>

      {/* TV Stand Legs */}
      <mesh position={[-0.7, 0.2, 0.3]}>
        <boxGeometry args={[0.1, 0.5, 0.1]} />
        <meshStandardMaterial color="#303030" />
      </mesh>
      <mesh position={[0.7, 0.2, 0.3]}>
        <boxGeometry args={[0.1, 0.5, 0.1]} />
        <meshStandardMaterial color="#303030" />
      </mesh>
      <mesh position={[-0.7, 0.2, -0.3]}>
        <boxGeometry args={[0.1, 0.5, 0.1]} />
        <meshStandardMaterial color="#303030" />
      </mesh>
      <mesh position={[0.7, 0.2, -0.3]}>
        <boxGeometry args={[0.1, 0.5, 0.1]} />
        <meshStandardMaterial color="#303030" />
      </mesh>
    </group>
  );
}