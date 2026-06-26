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
import BgAnimation from './components/BgAnimation';

function App() {
  useEffect(() => {
    const savedY = parseInt(sessionStorage.getItem('scrollY') || '0', 10);

    // Bypass css scroll-behavior: smooth so restoration is instant
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, savedY);

    requestAnimationFrame(() => {
      window.scrollTo(0, savedY); // second pass after first paint
      requestAnimationFrame(() => {
        document.documentElement.style.scrollBehavior = ''; // re-enable smooth
      });
    });

    const saveScroll = () => sessionStorage.setItem('scrollY', String(window.scrollY));
    window.addEventListener('beforeunload', saveScroll);

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

    return () => {
      observer.disconnect();
      window.removeEventListener('beforeunload', saveScroll);
    };
  }, []);

  return (
    <div className="app">
      <BgAnimation />
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
