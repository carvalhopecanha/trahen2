// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#0a0a0a',
      color: '#f0f0f0',
      padding: '4rem 5%',
      textAlign: 'center',
      fontFamily: 'Open Sans, sans-serif'
    }}>
      {/* Logo */}
      <div style={{
        marginBottom: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#28a745" strokeWidth="2">
          <path d="M12 6l-6 6 6 6 6-6-6-6z" />
          <path d="M12 16l-6 6 6 6 6-6-6-6z" />
        </svg>
        <span style={{ fontSize: '1.8rem', fontWeight: '700', color: 'white' }}>TRAHEN</span>
      </div>

      {/* Links */}
      <div style={{
        marginBottom: '2rem',
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        flexWrap: 'wrap'
      }}>
        <a href="#" style={{ color: '#bbb', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.3s' }}>
          Início
        </a>
        <a href="https://loja.trahen.com.br" target="_blank" rel="noreferrer" style={{ color: '#bbb', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.3s' }}>
          Loja
        </a>
        <a href="#" style={{ color: '#bbb', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.3s' }}>
          Sobre
        </a>
        <a href="#" style={{ color: '#bbb', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.3s' }}>
          Contato
        </a>
      </div>

      {/* Redes Sociais */}
      <div style={{
        marginBottom: '2rem',
        display: 'flex',
        justifyContent: 'center',
        gap: '1.2rem'
      }}>
        <a href="#" aria-label="Instagram" style={{ color: '#bbb', fontSize: '1.4rem', transition: 'color 0.3s' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.28-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.28.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.28-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
        <a href="#" aria-label="TikTok" style={{ color: '#bbb', fontSize: '1.4rem', transition: 'color 0.3s' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.42v13.67a2.87 2.87 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.47-1.56V9.5a5.12 5.12 0 0 0-5.12 5.12 5.12 5.12 0 0 0 5.12 5.12 5.12 5.12 0 0 0 5.12-5.12V9.34h3.42v-.65a4.83 4.83 0 0 1 4.83 4.83z"/>
          </svg>
        </a>
        <a href="#" aria-label="YouTube" style={{ color: '#bbb', fontSize: '1.4rem', transition: 'color 0.3s' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
          </svg>
        </a>
      </div>

      {/* Direitos autorais */}
      <div style={{
        fontSize: '0.85rem',
        color: '#777',
        borderTop: '1px solid #333',
        paddingTop: '1.5rem'
      }}>
        &copy; {new Date().getFullYear()} Trahen. Todos os direitos reservados.<br />
        <span style={{ display: 'block', marginTop: '0.3rem', color: '#28a745', fontWeight: '600' }}>
          Trilha em latim. Aventura em cada passo.
        </span>
      </div>
    </footer>
  );
}

export default Footer;