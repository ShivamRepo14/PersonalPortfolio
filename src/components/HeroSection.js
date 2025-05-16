
import React from 'react';
import '../css/HeroSection.css';

function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-intro"><span className="text-purple">Hi, my name is</span></p>
          <h1 className="hero-title">
            Shivam Gupta
          </h1>
          <h2 className="hero-subtitle">
            Full Stack MERN Developer
          </h2>
          <p className="hero-description">
            I build exceptional and responsive full stack web applications using 
            the MERN stack. Currently open to new opportunities to contribute to innovative projects.
          </p>
          <div className="hero-buttons">
            <button onClick={scrollToContact} className="btn btn-primary btn-lg">
              Get In Touch
            </button>
            <button onClick={scrollToAbout} className="btn btn-outline btn-lg">
              Learn More About Me
            </button>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <button 
          className="btn btn-icon scroll-button"
          onClick={scrollToAbout}
        >
          <span className="scroll-arrow">↓</span>
        </button>
      </div>
    </section>
  );
}

export default HeroSection;