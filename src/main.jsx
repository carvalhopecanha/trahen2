// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Inicializar Lenis (scroll suave)
import Lenis from '@studio-freight/lenis';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Configurar Lenis
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
  direction: 'vertical',
  gestureDirection: 'vertical',
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

root.render(

  
  <React.StrictMode>
    <App />
  </React.StrictMode>
);