import React from 'react';

function Education() {
  return (
    <section id="education" style={{
      maxWidth: '900px',
      margin: '2rem auto',
      background: '#563c5c',
      borderRadius: '16px',
      padding: '2rem',
      boxShadow: '0 8px 30px rgba(0,0,0,0.4)'
    }}>
      <h2 style={{ textAlign: 'center', color: '#f6d365' }}>Education</h2>
      <div style={{
        background: '#32174d',
        padding: '1rem',
        borderRadius: '12px',
        color: '#eee',
        boxShadow: '0 4px 15px rgba(0,0,0,0.4)'
      }}>
        <h3>VIT University, Chennai, India</h3>
        <p>Integrated M.Tech – Computer Science | Expected 05/2027</p>
      </div>
    </section>
  );
}

export default Education;
