import React from "react";
import { useState } from "react";

function Navbar(){
    const [isNavScrolled, setIsNavScrolled] = useState(false);
      const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
    return(
        <>
         <nav className={`nav ${isNavScrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <div className="logo">DEV.PORTFOLIO</div>
          <div className="nav-links">
            <a href="#home" className="nav-link" onClick={(e) => handleSmoothScroll(e, '#home')}>Home</a>
            <a href="#about" className="nav-link" onClick={(e) => handleSmoothScroll(e, '#about')}>About</a>
            <a href="#skills" className="nav-link" onClick={(e) => handleSmoothScroll(e, '#skills')}>Skills</a>
            <a href="#projects" className="nav-link" onClick={(e) => handleSmoothScroll(e, '#projects')}>Projects</a>
            <a href="#contact" className="nav-link" onClick={(e) => handleSmoothScroll(e, '#contact')}>Contact</a>
          </div>
        </div>
      </nav>
       </>
    )
}
export default Navbar