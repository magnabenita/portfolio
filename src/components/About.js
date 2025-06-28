// About.js
import React from 'react';
import myPic from '../assets/mypic.jpg'; // adjust path if needed

function About() {
  return (
    <section id="about" style={{
      maxWidth: '900px',
      margin: '2rem auto',
      background: '#563c5c',
      borderRadius: '16px',
      padding: '2rem',
      boxShadow: '0 8px 30px rgba(0,0,0,0.4)'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }} className="about-flex">
        <div style={{ flex: '1 1 300px' }}>
          <h2 style={{ textAlign: 'center', color: '#f6d365' }}>About Me</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#eee' }}>
            Enthusiastic Machine Learning enthusiast with hands-on experience in building 5+ ML projects achieving high accuracy. Passionate about solving real-world problems using data-driven approaches and creative thinking.
          </p>
        </div>
        <div style={{ flexShrink: 0 }}>
          <img src={myPic} alt="My Profile" style={{
            borderRadius: '50%',
            width: '180px',
            height: '180px',
            objectFit: 'cover',
            boxShadow: '0 4px 15px rgba(0,0,0,0.5)'
          }} />
        </div>
      </div>

      <style>
        {`
          @media (max-width: 768px) {
            .about-flex {
              flex-direction: column;
              align-items: center;
            }
          }
        `}
      </style>
    </section>
  );
}

export default About;
