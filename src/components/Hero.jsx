import React from 'react';

const Hero = ({ handleSmoothScroll }) => {
  return (
    <>
      
      <section className="hero" id="home">
        <div className="hero-background-image"></div>
        <div className="hero-particles"></div>
        
        <div className="hero-content">
          <div className="hero-subtitle">Full Stack Developer</div>
          <h1 className="hero-title">Building Digital Solutions</h1>
          <p className="hero-description">
            Passionate full-stack developer specializing in modern web technologies. 
            I create scalable applications with clean code and exceptional user experiences.
          </p>
          <button 
            className="hero-cta" 
            onClick={(e) => handleSmoothScroll(e, '#projects')}
          >
            View My Projects →
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;