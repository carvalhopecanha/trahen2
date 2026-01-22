// src/components/sections/Start.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import CapBone from '../start'; // ← Importa o novo componente
import { OrbitControls } from '@react-three/drei';

function Start() {
  return (
    <section style={{
      height: '100vh',
      width: '100%',
      backgroundColor: '#f9f9f9',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Canvas 3D */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1
      }}>
        <Canvas
          camera={{ position: [0, 0, 3], fov: 50 }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={1.5} />
          <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          
          {/* <CapBone />  ← Usa o boné aqui */}
          
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            enableRotate={true}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>

      {/* Texto sobreposto */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        color: '#1a1a1a',
        textShadow: '0 2px 8px rgba(0,0,0,0.3)',
        pointerEvents: 'none'
      }}>
        <h1 style={{ fontSize: '4rem', margin: '0 0 1rem 0' }}>TRAHEN</h1>
        <p style={{ fontSize: '1.5rem', margin: '0' }}>
          Trilha em latim.<br />
          Aventura em cada passo.
        </p>
      </div>
    </section>
  );
}

export default Start;