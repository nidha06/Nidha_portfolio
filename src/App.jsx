import React, { useState, useEffect } from 'react';
import './index.css'
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Loading from './components/Loading';
import SkillSection from './components/SkillSection';
import ProjectSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';

const App = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
 
  useEffect(() => {

    // Scroll event listeners
    const handleScroll = () => {
      const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setScrollProgress(scrolled);
      
      if (window.scrollY > 50) {
        setIsNavScrolled(true);
      } else {
        setIsNavScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Particle creation
    const particleInterval = setInterval(() => {
      createParticle();
    }, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(particleInterval);
    };
  }, []);

  const createParticle = () => {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.animationDelay = Math.random() * 8 + 's';
    particle.style.animationDuration = (Math.random() * 3 + 5) + 's';
    
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer) {
      particlesContainer.appendChild(particle);
      
      setTimeout(() => {
        if (particle.parentNode) {
          particle.remove();
        }
      }, 8000);
    }
  };



  return (
    <div className="portfolio-container">
     

      {/* Scroll Progress */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>

      {/* Animated Background */}
      <div className="animated-bg"></div>

      {/* Particles */}
      <div className="particles" id="particles"></div>

      {/* Loader */}
      <Loading/>

      {/* Navigation */}
    <Navbar/>

      {/* Hero Section */}
      <Hero/>
   

      {/* About Section */}
      <About/>

      {/* Skills Section */}
     <SkillSection/>

      {/* Projects Section */}
     <ProjectSection/>

      {/* Contact Section */}
      <ContactSection/>
    </div>
  );
};

export default App;