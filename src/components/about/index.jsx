// src/components/sections/AboutSection.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function AboutSection() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    // Animação do texto ao entrar na view
    gsap.from(textRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    // Efeito parallax no fundo
    const handleScroll = () => {
      if (!backgroundRef.current) return;
      const scrollY = window.scrollY;
      const translateY = -scrollY * 0.03; // Movimento lento (parallax)
      backgroundRef.current.style.transform = `translateY(${translateY}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      style={{
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1a1a1a',
        color: '#f9f9f9',
        textAlign: 'center',
        padding: '0 5%'
      }}
    >
      {/* Fundo com parallax */}
      <div 
        ref={backgroundRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cdefs%3E%3Cpattern id='topo' patternUnits='userSpaceOnUse' width='100' height='100'%3E%3Cpath d='M0,50 Q25,25 50,50 T100,50' stroke='%23333' stroke-width='1' fill='none'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23topo)'/%3E%3C/svg%3E")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'transform 0.1s ease-out'
        }}
      ></div>

      {/* Texto centralizado */}
      <div 
        ref={textRef}
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '600px',
          fontSize: '1.2rem',
          lineHeight: '1.6',
          fontWeight: '600',
          letterSpacing: '1px',
          textTransform: 'uppercase'
        }}
      >
        <h2>TEXTO AQUI SOBRE A TRAHEN</h2>
        <h2>PASSANDO CONFIANÇA PARA O CLIENTE</h2>
        <h2>DIZENDO QUE NOSSA MARCA</h2>
        <h2>TRAS FORÇA</h2>
      </div>
    </section>
  );
}

export default AboutSection;