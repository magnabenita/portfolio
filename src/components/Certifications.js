import React from 'react';

function Certifications() {
  const certs = [
    "Level 1 & 2 – Arduino (07/2023)",
    "OGCA 2021 Awareness Program (03/2021)",
    "C Programming Training (09/2022)",
    "C++ Programming Training (09/2022)",
    "Python Programming Training (09/2022)",
    "Advanced Excel Workshop (05/2021)",
    "Introduction to Git and GitHub (12/2022)"
  ];

  return (
    <section style={{
      maxWidth: '900px',
      margin: '2rem auto',
      background: '#563c5c',
      borderRadius: '16px',
      padding: '2rem',
      boxShadow: '0 8px 30px rgba(0,0,0,0.4)'
    }}>
      <h2 style={{ textAlign: 'center', color: '#f6d365' }}>Certifications & Workshops</h2>
      <div style={{
        background: '#32174d',
        borderRadius: '12px',
        padding: '1rem',
        marginTop: '1rem'
      }}>
        <ul style={{ color: '#eee', margin: 0, paddingLeft: '1.2rem' }}>
          {certs.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Certifications;
