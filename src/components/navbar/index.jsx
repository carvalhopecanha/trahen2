import React from "react";
 

function NavBar() {
    return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 5%',
      zIndex: 1000,
      backgroundColor: 'rgba(255, 255, 255, 0)', // Transparente com leve opacidade
      backdropFilter: 'blur(10px)',
    }}>
      {/* Menu (esquerda) */}
      <div style={{ cursor: 'pointer', padding: '0.5rem' }}>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>

      {/* Logo (centro) */}
      <img 
        src="/assets/images/logo.png" 
        alt="Trahen" 
        style={{ height: '40px' }} 
      />

      {/* Botão Loja (direita) */}
      <a 
        href="https://loja.trahen.com.br" 
        target="_blank" 
        rel="noreferrer"
        style={{
          padding: '0.5rem 1rem',
          background: '#28a745',
          color: 'white',
          textDecoration: 'none',
          fontWeight: '600',
          borderRadius: '5px',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 3h2l.4 2M7 13h10v8a2 2 0 002 2H5a2 2 0 002-2v-8zm5-1a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6a2 2 0 012-2h6z" />
        </svg>
        Loja
      </a>
    </header>
  );
}

export default NavBar;