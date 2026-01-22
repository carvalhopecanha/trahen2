// src/App.jsx
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import  Home  from './pages/home'
import NavBar from './components/navbar'

// Registrar ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Animações básicas ao carregar
    gsap.from('.hero h1', {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.3,
      ease: 'power3.out'
    });

    gsap.from('.hero p', {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.6,
      ease: 'power3.out'
    });

    // Animação ao rolar (exemplo para seção Loja)
    gsap.utils.toArray('.section').forEach((section, i) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    });

  }, []);

  return (
    <div className="App">
   
      {/* Aqui vai seu conteúdo — vamos manter Home como exemplo */}
        <NavBar />
        <Home />  
    </div>
  );
}

export default App;