import React from 'react';
import myPic from '../assets/mypic.jpg'; // replace with your actual filename

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
        flexDirection: 'row',
        alignItems: 'center',
        gap: '2rem',
        flexWrap: 'wrap'
      }}>
        <div style={{ flex: 1, minWidth: '250px' }}>
          <h2 style={{ textAlign: 'center', color: '#f6d365' }}>About Me</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#eee' }}>
            Enthusiastic Machine Learning enthusiast with hands-on experience in building 5+ ML projects achieving high accuracy. Passionate about solving real-world problems using data-driven approaches and creative thinking.
          </p>
          <p style={{ fontSize: '1rem', marginTop: '1rem', color: '#eee' }}>
            
          </p>
        </div>
        <div style={{ flexShrink: 0 }}>
          <img src={myPic} alt="My Profile" style={{
            borderRadius: '50%',
            width: '180px',
            height: '180px',
            objectFit: 'cover',
            boxShadow: '0 4px 15px rgba(0,0,0,0.5)'
          }}/>
        </div>
      </div>
    </section>
  );
}

export default About;
