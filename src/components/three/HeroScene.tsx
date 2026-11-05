"use client";

import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Float,
  Icosahedron,
  MeshDistortMaterial,
  Torus,
  RoundedBox,
  Sparkles,
  PerformanceMonitor,
} from "@react-three/drei";
import type { Group, Mesh } from "three";
import type { DeviceTier } from "@/lib/useDeviceTier";

type Settings = { particles: number; detail: number; maxDpr: number; dpr: number };

const TIER: Record<DeviceTier, Settings> = {
  high: { particles: 80, detail: 10, maxDpr: 2, dpr: 1.75 },
  medium: { particles: 38, detail: 5, maxDpr: 1.5, dpr: 1.25 },
  low: { particles: 18, detail: 3, maxDpr: 1, dpr: 1 },
};

/** The glowing central "energy sphere". */
function EnergyCore({ detail }: { detail: number }) {
  const mesh = useRef<Mesh>(null);
  useFrame((_, dt) => {
    if (mesh.current) mesh.current.rotation.y += dt * 0.15;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.5} floatIntensity={1.2}>
      <Icosahedron ref={mesh} args={[1.25, detail]}>
        <MeshDistortMaterial
          color="#2b6bff"
          emissive="#1747d6"
          emissiveIntensity={0.35}
          distort={0.38}
          speed={1.7}
          roughness={0.12}
          metalness={0.55}
          clearcoat={0.9}
          clearcoatRoughness={0.1}
        />
      </Icosahedron>
    </Float>
  );
}

/** Floating geometric companions in the accent palette. */
function FloatingObjects() {
  return (
    <>
      <Float speed={2} rotationIntensity={1.2} floatIntensity={2} position={[2.6, 1.1, -1]}>
        <Torus args={[0.42, 0.14, 16, 48]}>
          <meshStandardMaterial color="#ff7a18" roughness={0.25} metalness={0.4} />
        </Torus>
      </Float>

      <Float speed={1.6} rotationIntensity={1.5} floatIntensity={1.8} position={[-2.8, -0.6, -0.5]}>
        <RoundedBox args={[0.7, 0.7, 0.7]} radius={0.12} smoothness={4}>
          <meshStandardMaterial color="#10c98a" roughness={0.3} metalness={0.35} />
        </RoundedBox>
      </Float>

      <Float speed={2.2} rotationIntensity={1} floatIntensity={2.2} position={[2.1, -1.4, 0.4]}>
        <Icosahedron args={[0.42, 0]}>
          <meshStandardMaterial color="#6d4bff" roughness={0.2} metalness={0.5} />
        </Icosahedron>
      </Float>

      {/* interactive rings */}
      <Float speed={1.1} rotationIntensity={0.4} floatIntensity={0.6}>
        <Torus args={[2.3, 0.012, 12, 90]} rotation={[Math.PI / 2.4, 0.3, 0]}>
          <meshBasicMaterial color="#2b6bff" transparent opacity={0.5} />
        </Torus>
        <Torus args={[2.75, 0.01, 12, 90]} rotation={[Math.PI / 1.8, -0.2, 0]}>
          <meshBasicMaterial color="#ff7a18" transparent opacity={0.35} />
        </Torus>
      </Float>
    </>
  );
}

/** Whole scene gently leans toward the cursor. */
function Rig({ children }: { children: React.ReactNode }) {
  const group = useRef<Group>(null);
  const { pointer } = useThree();
  useFrame(() => {
    if (!group.current) return;
    group.current.rotation.y += (pointer.x * 0.3 - group.current.rotation.y) * 0.04;
    group.current.rotation.x += (-pointer.y * 0.2 - group.current.rotation.x) * 0.04;
  });
  return <group ref={group}>{children}</group>;
}

export default function HeroScene({ tier }: { tier: DeviceTier }) {
  const s = TIER[tier];
  const [dpr, setDpr] = useState(s.dpr);

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 42 }}
      dpr={dpr}
      gl={{ antialias: tier === "high", alpha: true, powerPreference: "high-performance" }}
      style={{ touchAction: "pan-y" }}
    >
      {/* FPS-based adaptive quality — drop/raise resolution to hold framerate. */}
      <PerformanceMonitor
        onDecline={() => setDpr((d) => Math.max(1, d - 0.5))}
        onIncline={() => setDpr((d) => Math.min(s.maxDpr, d + 0.25))}
      />

      <ambientLight intensity={0.85} />
      <directionalLight position={[4, 6, 5]} intensity={1.6} />
      <pointLight position={[-5, -3, 2]} intensity={1.2} color="#ff7a18" />
      <pointLight position={[5, 3, -2]} intensity={1.1} color="#2b6bff" />

      <Suspense fallback={null}>
        <Rig>
          <EnergyCore detail={s.detail} />
          <FloatingObjects />
          <Sparkles
            count={s.particles}
            scale={9}
            size={2.5}
            speed={0.3}
            opacity={0.7}
            color="#2b6bff"
          />
        </Rig>
      </Suspense>
    </Canvas>
  );
}
