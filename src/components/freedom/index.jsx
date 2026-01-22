// src/components/sections/FreedomSection.jsx
import React from 'react';

function FreedomSection() {
  return (
    <section style={{
      height: '100vh',
      width: '100%',
      backgroundImage: `url('https://images.unsplash.com/photo-1504609773052-850f16e49d0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      color: 'white',
      textAlign: 'center'
    }}>
      {/* Overlay escuro para legibilidade */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.4)',
        zIndex: 1
      }}></div>

      {/* Conteúdo centralizado */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem'
      }}>
        {/* Logo com ícone de montanha */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '2.5rem',
          fontWeight: '700',
          textShadow: '0 2px 4px rgba(0,0,0,0.5)'
        }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 6l-6 6 6 6 6-6-6-6z" />
            <path d="M12 16l-6 6 6 6 6-6-6-6z" />
          </svg>
          TRAHEN
        </div>

        {/* Texto opcional */}
        <p style={{
          fontSize: '1.2rem',
          fontWeight: '300',
          textShadow: '0 2px 4px rgba(0,0,0,0.5)'
        }}>
          Aventura em cada passo.
        </p>
      </div>
    </section>
  );
}

export default FreedomSection;