"use client";

import { useRef, useState, useMemo, Suspense, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";
import { TECH_CATEGORIES_3D, CASE_STUDIES_3D } from "../data/tech-and-projects";

const LIGHT_BG = "#f8fafc";

function LightBackground() {
  const { scene } = useThree();
  useEffect(() => {
    scene.background = new THREE.Color(LIGHT_BG);
    return () => {
      scene.background = null;
    };
  }, [scene]);
  return null;
}

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function EmojiNode({
  position,
  emoji,
  label,
  onClick,
  scale = 1,
}: {
  position: [number, number, number];
  emoji: string;
  label: string;
  onClick: () => void;
  scale?: number;
}) {
  const [hovered, setHovered] = useState(false);
  const size = (hovered ? 1.15 : 1) * scale * 1.2;

  return (
    <group position={position}>
      {/* Invisible mesh for raycasting (click/hover) */}
      <mesh
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={() => setHovered(false)}
      >
        <planeGeometry args={[size, size, 1, 1]} />
        <meshBasicMaterial visible={false} />
      </mesh>
      {/* Emoji + label as DOM (reliable cross-browser) */}
      <Html
        center
        distanceFactor={12}
        transform
        style={{
          pointerEvents: "none",
          userSelect: "none",
          textAlign: "center",
          width: "max-content",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <span
            style={{
              fontSize: "64px",
              lineHeight: 1,
              filter: hovered ? "drop-shadow(0 2px 8px rgba(0,0,0,0.15))" : "none",
              transition: "filter 0.2s",
            }}
            aria-hidden
          >
            {emoji}
          </span>
          <span
            style={{
              fontSize: "11px",
              fontWeight: 700,
              color: "#334155",
              whiteSpace: "nowrap",
              textShadow: "0 1px 2px rgba(255,255,255,0.9)",
              opacity: hovered ? 1 : 0.9,
            }}
          >
            {label}
          </span>
        </div>
      </Html>
    </group>
  );
}

function Avatar3D({ reducedMotion = false }: { reducedMotion?: boolean }) {
  const groupRef = useRef<THREE.Group | null>(null);

  useFrame((state) => {
    if (!groupRef.current || reducedMotion) return;
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.08;
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
  });

  return (
    <group ref={groupRef} position={[-2.8, -0.5, 1.5]} scale={0.7}>
      {/* head */}
      <mesh position={[0, 1.1, 0]}>
        <sphereGeometry args={[0.22, 32, 24]} />
        <meshStandardMaterial color="#a78bfa" metalness={0.06} roughness={0.88} />
      </mesh>
      {/* body: soft pill (vertical) */}
      <mesh position={[0, 0.5, 0]}>
        <capsuleGeometry args={[0.18, 0.24, 8, 20]} />
        <meshStandardMaterial color="#7c3aed" metalness={0.06} roughness={0.88} />
      </mesh>
      {/* arm: thin pill */}
      <mesh position={[0.35, 0.65, 0]} rotation={[0, 0, -0.4]}>
        <capsuleGeometry args={[0.04, 0.28, 4, 12]} />
        <meshStandardMaterial color="#8b5cf6" metalness={0.06} roughness={0.88} />
      </mesh>
    </group>
  );
}

function SceneContent({ reducedMotion }: { reducedMotion: boolean }) {
  const techPositions = useMemo(() => {
    const count = TECH_CATEGORIES_3D.length;
    const radius = 3.2;
    return TECH_CATEGORIES_3D.map((cat, i) => {
      const angle = (i / count) * Math.PI * 2 - Math.PI / 2;
      return [
        Math.cos(angle) * radius,
        0.2,
        Math.sin(angle) * radius,
      ] as [number, number, number];
    });
  }, []);

  const projectPositions = useMemo(() => {
    const count = CASE_STUDIES_3D.length;
    const radius = 5.0;
    return CASE_STUDIES_3D.map((_, i) => {
      const angle = (i / count) * Math.PI * 2 - Math.PI / 2;
      return [
        Math.cos(angle) * radius,
        0.15,
        Math.sin(angle) * radius,
      ] as [number, number, number];
    });
  }, []);

  return (
    <>
      <LightBackground />
      <ambientLight intensity={0.85} />
      <directionalLight position={[3, 5, 4]} intensity={1} />
      <pointLight position={[4, 4, 4]} intensity={0.9} />
      <pointLight position={[-3, 2, 2]} intensity={0.4} color="#a78bfa" />

      {TECH_CATEGORIES_3D.map((cat, i) => (
        <EmojiNode
          key={cat.id}
          position={techPositions[i]}
          emoji={cat.emoji}
          label={cat.title}
          onClick={() => scrollToSection("skills")}
          scale={1}
        />
      ))}
      {CASE_STUDIES_3D.map((proj, i) => (
        <EmojiNode
          key={proj.id}
          position={projectPositions[i]}
          emoji={proj.emoji}
          label={proj.title}
          onClick={() => scrollToSection("case-studies")}
          scale={0.95}
        />
      ))}

      <Avatar3D reducedMotion={reducedMotion} />
    </>
  );
}

export default function TechProjectSpace() {
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <section
      id="explore-3d"
      className="py-14 md:py-16 bg-gradient-to-b from-slate-50/90 to-white"
      aria-label="Explore tech stack and projects in 3D"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
            Explore
          </h2>
          <p className="text-sm text-gray-500">
            Click a node to jump to Tech Stack or Case Studies
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-slate-200/80 bg-slate-50/90 shadow-sm aspect-[16/9] min-h-[320px]">
          <Suspense
            fallback={
              <div className="w-full h-full flex items-center justify-center bg-slate-50 text-slate-500 text-sm font-medium">
                Loading 3D…
              </div>
            }
          >
            <Canvas
              camera={{ position: [0, 0, 10], fov: 50 }}
              gl={{ antialias: true, alpha: false }}
              dpr={[1, 2]}
            >
              <SceneContent reducedMotion={reducedMotion} />
              <OrbitControls
                enableZoom={true}
                enablePan={false}
                autoRotate={!reducedMotion}
                autoRotateSpeed={0.8}
                maxPolarAngle={Math.PI / 2 + 0.2}
                minPolarAngle={Math.PI / 2 - 0.5}
              />
            </Canvas>
          </Suspense>
        </div>
      </div>
    </section>
  );
}
