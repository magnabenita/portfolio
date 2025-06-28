// Contact.js
import React from 'react';

function Contact() {
  return (
    <section id="contact" style={{
      maxWidth: '900px',
      margin: '2rem auto',
      background: '#563c5c',
      borderRadius: '16px',
      padding: '2rem',
      boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
      textAlign: 'center'
    }}>
      <h2 style={{ color: '#f6d365' }}>Contact</h2>
      <div style={{
        background: '#32174d',
        borderRadius: '12px',
        padding: '1rem',
        marginTop: '1rem'
      }}>
        <p>Email: magnabenita123@gmail.com</p>
        <p>
          LinkedIn: <a href="https://www.linkedin.com/in/magna-benita-p-804671250/" target="_blank" rel="noopener noreferrer" style={{ color: '#f6d365' }}>Magna Benita P</a>
        </p>
        <p>
          Instagram: <a href="https://www.instagram.com/magnabenita" target="_blank" rel="noopener noreferrer" style={{ color: '#f6d365' }}>magnabenita</a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
