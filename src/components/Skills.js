import React from 'react';

function Skills() {
  const skills = [
    "Machine Learning",
    "Data Analysis",
    "Teamwork & Collaboration",
    "Problem-solving Aptitude",
    "Creative & Resourceful",
    "Goal-oriented Mindset",
    "Computer Skills"
  ];

  return (
    <section id="skills" style={{
      maxWidth: '900px',
      margin: '2rem auto',
      background: '#563c5c',
      borderRadius: '16px',
      padding: '2rem',
      boxShadow: '0 8px 30px rgba(0,0,0,0.4)'
    }}>
      <h2 style={{ textAlign: 'center', color: '#f6d365' }}>Skills</h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        justifyContent: 'center'
      }}>
        {skills.map((skill, index) => (
          <div key={index} style={{
            background: '#32174d',
            padding: '1rem 2rem',
            borderRadius: '20px',
            fontWeight: 'bold',
            color: '#eee',
            boxShadow: '0 4px 10px rgba(0,0,0,0.4)'
          }}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
