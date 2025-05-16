import React from 'react';
import '../css/SkillsSection.css';

function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🖥️",
      skills: ["ReactJS", "HTML5", "CSS3", "JavaScript (ES6+)", "Responsive Design"]
    },
    {
      title: "Backend Development",
      icon: "🔧",
      skills: ["ExpressJS", "NodeJS", "RESTful APIs", "Authentication"]
    },
    {
      title: "Database",
      icon: "🗄️",
      skills: ["MongoDB", "Mongoose ODM", "Database Design"]
    },
    {
      title: "Programming",
      icon: "📝",
      skills: ["JavaScript", "Data Structures & Algorithms (DSA)"]
    },
    {
      title: "Data Structures And Algorithms",
      icon: "🔄",
      skills: ["Arrays", "String","Stack & Queues" ,"Linked list ", "Tress" , "Graph"]
    },
    {
      title: "Others",
      icon: "🔄",
      skills: ["Git & GitHub", "MERN Stack", "Agile Methodology", "Problem Solving"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-heading">Skills & Expertise</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <div className="skill-card-content">
                <div className="skill-header">
                  <div className="skill-icon">
                    {category.icon}
                  </div>
                  <h3 className="skill-title">{category.title}</h3>
                </div>
                <div className="skill-list">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="skill-pill"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="core-skills">
          <h3 className="core-skills-title">Core Technical Stack</h3>
          <div className="core-skills-list">
            {["ReactJS", "ExpressJS", "MongoDB", "NodeJS", "MERN Stack", "DSA"].map((skill, index) => (
              <div 
                key={index}
                className="core-skill-item"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;