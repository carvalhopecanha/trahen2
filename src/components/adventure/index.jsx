// src/components/sections/AdventureSection.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function AdventureSection() {
  const containerRef = useRef(null);
  const circlesRef = useRef([]);

  useEffect(() => {
    // Animação dos círculos (flutuação)
    circlesRef.current.forEach((circle, i) => {
      gsap.to(circle, {
        y: () => Math.sin(Date.now() * 0.001 + i * 0.5) * 5,
        duration: 2,
        repeat: -1,
        ease: 'none'
      });
    });

    // Scroll horizontal com parallax no fundo
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollX = window.scrollY * 0.5; // Movimento horizontal baseado no scroll vertical
      containerRef.current.style.transform = `translateX(-${scrollX}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      style={{
        height: '100vh',
        width: '100%',
        overflowX: 'auto',
        overflowY: 'hidden',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1a3a2a', // Verde escuro como na imagem
        padding: '0 5%'
      }}
    >
      {/* Container para scroll horizontal */}
      <div 
        ref={containerRef}
        style={{
          display: 'flex',
          gap: '4rem',
          minWidth: '300%',
          padding: '0 2rem',
          transition: 'transform 0.1s ease-out'
        }}
      >
        {/* Círculos com texto */}
        {[
          { label: 'Natureza', size: '120px' },
          { label: 'Trilha', size: '150px' },
          { label: 'Aventura', size: '180px' },
          { label: 'Força', size: '90px' },
          { label: 'Selva', size: '70px' },
          { label: 'Segurança', size: '160px' }
        ].map((item, index) => (
          <div
            key={index}
            ref={(el) => (circlesRef.current[index] = el)}
            style={{
              width: item.size,
              height: item.size,
              borderRadius: '50%',
              background: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              fontWeight: '600',
              color: '#1a1a1a',
              fontSize: '0.9rem',
              textAlign: 'center',
              padding: '0.5rem',
              cursor: 'pointer',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            {item.label}
          </div>
        ))}
      </div>

      {/* Texto de apoio (opcional) */}
      <div style={{
        position: 'absolute',
        top: '1rem',
        left: '5%',
        color: 'white',
        fontSize: '0.9rem',
        opacity: 0.7
      }}>
        Escolha sua aventura →
      </div>
    </section>
  );
}

export default AdventureSection;