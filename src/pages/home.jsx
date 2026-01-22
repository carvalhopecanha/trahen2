import React from 'react';
import Start from '../components/start';
import AboutSection from '../components/about'
import AdventureSection from '../components/adventure'
import TrailSection from '../components/trail'
import FreedomSection from '../components/freedom'
import Footer from '../components/footer'

function Home() {
  return (
    <div>
     <Start />
     <AboutSection />
     <AdventureSection />
     <TrailSection />
     <FreedomSection />
     <Footer/>
    </div>
  );
}

export default Home;