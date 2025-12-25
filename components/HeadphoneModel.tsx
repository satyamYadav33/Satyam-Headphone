
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface HeadphoneProps {
  color?: string;
  autoRotate?: boolean;
}

const HeadphoneModel: React.FC<HeadphoneProps> = ({ color = "#00D4FF", autoRotate = true }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (autoRotate && groupRef.current) {
      groupRef.current.rotation.y += 0.01;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group ref={groupRef} scale={[1.2, 1.2, 1.2]}>
      {/* Headband */}
      <mesh position={[0, 0.7, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.8, 0.08, 16, 100, Math.PI]} />
        <meshStandardMaterial color="#111" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Earcups Left */}
      <mesh position={[-0.85, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.4, 0.45, 0.3, 32]} />
        <meshStandardMaterial color="#222" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[-1, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.42, 0.42, 0.1, 32]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
      </mesh>

      {/* Earcups Right */}
      <mesh position={[0.85, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <cylinderGeometry args={[0.4, 0.45, 0.3, 32]} />
        <meshStandardMaterial color="#222" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[1, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <cylinderGeometry args={[0.42, 0.42, 0.1, 32]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
      </mesh>

      {/* Detail Lights */}
      <pointLight position={[1.5, 0, 0]} intensity={2} color={color} />
      <pointLight position={[-1.5, 0, 0]} intensity={2} color={color} />
    </group>
  );
};

export default HeadphoneModel;
