"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Sphere } from "@react-three/drei";


function Blob({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={2} floatIntensity={2}>
      <Sphere args={[1, 64, 64]} position={position}>
        <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.4} />
      </Sphere>
    </Float>
  );
}

export default function Scene() {
  return (
    <Canvas className="absolute inset-0 -z-10">
      <ambientLight intensity={0.7} />
      <directionalLight position={[2, 2, 2]} />

      <Blob position={[-2, 0, 0]} />
      <Blob position={[2, 0, 0]} />
      <Blob position={[0, 2, 0]} />
    </Canvas>
  );
}