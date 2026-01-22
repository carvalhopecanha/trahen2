// src/components/sections/trail/TrailSection.jsx
import React from 'react';

function TrailSection() {
  return (
    <section style={{
      height: '100vh',
      width: '100%',
      backgroundColor: '#f9f9f9',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 5%',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Linha tracejada central */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        width: '2px',
        height: '100%',
        backgroundColor: '#28a745',
        transform: 'translateX(-50%)',
        zIndex: 1
      }}></div>

      {/* Container principal: imagem + texto */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '1200px',
        gap: '4rem',
        zIndex: 2
      }}>
        {/* Imagem à esquerda */}
        <div style={{
          width: '45%',
          height: '400px',
          backgroundImage: `url('/assets/images/camisetatest.png')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}></div>

        {/* Texto à direita */}
        <div style={{
          width: '45%',
          padding: '2rem',
          backgroundColor: 'white',
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          textAlign: 'left'
        }}>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Texto</h3>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            Lorem ipsum soque lare in ther fiiftj<br />
            Lorem ipsum soque lare in ther fiiftj<br />
            Lorem ipsum soque lare in ther fiiftj<br />
            Lorem ipsum soque lare in ther fiiftj
          </p>
        </div>
      </div>

      {/* Imagens inferiores */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '2rem',
        marginTop: '4rem',
        width: '100%',
        maxWidth: '1200px',
        zIndex: 2
      }}>
        <div style={{
          width: '48%',
          height: '250px',
          backgroundImage: `url('/assets/images/bonetest.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}></div>
        <div style={{
          width: '48%',
          height: '250px',
          backgroundImage: `url('/assets/images/pulseiratest.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}></div>
      </div>
    </section>
  );
}

export default TrailSection;