import React, { useEffect } from 'react';
import './index.scss';
import Navbar from './components/Menu';
import Hero from './components/Profile';
import About from './pages/About';
import Skills from './components/Skills';
import Resume from './pages/Resume';
import Works from './pages/Works';
import Contact from './pages/Contact';
import BackToTop from './components/BackToTop';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.08 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Resume />
      <Works />
      <Contact />
      <BackToTop />
    </div>
  );
}

export default App;
