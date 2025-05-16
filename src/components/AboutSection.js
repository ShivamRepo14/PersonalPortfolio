import React from 'react';
import '../css/AboutSection.css';

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-heading">About Me</h2>
        
        <div className="about-content">
          <div className="about-description">
            <p className="about-text">
              I'm a passionate MERN stack developer with a strong foundation in building modern web applications.
              With my BScIT degree from the University of Mumbai, I've developed a solid understanding of 
              computer science fundamentals and software development practices.
            </p>
            <p className="about-text">
              My technical journey has focused on creating responsive, user-friendly applications
              that solve real-world problems. I enjoy the full development lifecycle - from planning and designing
              to implementing and deploying robust applications.
            </p>
            <p className="about-text">
              I'm currently <span className="text-highlight">open to work</span> and looking for opportunities to contribute my skills to innovative IT companies, 
              startups, or organizations where I can grow and make a meaningful impact.
            </p>
          </div>
          
          <div className="about-cards">
            <div className="about-card">
              <div className="card-header">
                <div className="card-icon">
                  <span className="icon-graduation">🎓</span>
                </div>
                <div className="card-title-container">
                  <h3 className="card-title">Education</h3>
                  <p className="card-subtitle">Bachelor of Science in Information Technology (BScIT)</p>
                  <p className="card-meta">University of Mumbai</p>
                </div>
              </div>
            </div>
            
            <div className="about-card">
              <div className="card-header">
                <div className="card-icon">
                  <span className="icon-briefcase">💼</span>
                </div>
                <div className="card-title-container">
                  <h3 className="card-title">Professional Status</h3>
                  <p className="card-subtitle">
                    <span className="status-badge">Available for hire</span>
                  </p>
                  <p className="card-meta">
                    Open to full-time opportunities, freelance projects, and collaborations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;