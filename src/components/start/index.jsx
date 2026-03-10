// src/components/sections/Start.jsx

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";


function Logo3D() {
  const ref = useRef();
  const { scene } = useGLTF("3d/2trahen3d.glb");

  // aplica cor verde musgo
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material = new THREE.MeshStandardMaterial({
        color: "#213c21",
        metalness: 2.3,
        roughness: 1.6
      });
    }
  });

  useFrame((state) => {
    if (!ref.current) return;

    // rotação suave com o mouse
    ref.current.rotation.y += (state.mouse.x * 0.5 - ref.current.rotation.y) * 0.05;
    ref.current.rotation.x += (-state.mouse.y * 0.3 - ref.current.rotation.x) * 0.05;
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={0.015}
      position={[0, 0, 0]}
 
    />
  );
}


function Start() {
  return (
    <section
      style={{
        height: "100vh",
        width: "100%",
        backgroundColor: "#f9f9f9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Canvas 3D */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      >
        <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[3, 3, 3]} intensity={2} />
          <directionalLight position={[-3, -3, -3]} intensity={1} />

          {/* LOGO 3D */}
          <Logo3D />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2}
          />

          <ambientLight intensity={1.2} />

            <directionalLight
              position={[5,5,5]}
              intensity={2}
            />

            <directionalLight
              position={[-5,-5,-5]}
              intensity={1}
            />

            <pointLight position={[0,3,3]} intensity={1.5}/>
                    </Canvas>
      </div>

      {/* Texto */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          color: "#1a1a1a",
          textShadow: "0 2px 8px rgba(0,0,0,0.3)",
          pointerEvents: "none",
        }}
      >
        <h1 style={{ fontSize: "4rem", margin: "0 0 1rem 0" }}>TRAHEN</h1>
        <p style={{ fontSize: "1.5rem", margin: "0" }}>
          Trilha em latim.
          <br />
          Aventura em cada passo.
        </p>
      </div>
    </section>
  );
}

export default Start;