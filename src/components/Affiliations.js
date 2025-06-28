// Affiliations.js
import React from 'react';

function Affiliations() {
  const affiliations = [
    "Android Club, VIT – Member (2023)",
    "TechnoVIT – Design Team (2024)"
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
      <h2 style={{ textAlign: 'center', color: '#f6d365' }}>Affiliations</h2>
      <div style={{
        background: '#32174d',
        borderRadius: '12px',
        padding: '1rem',
        marginTop: '1rem'
      }}>
        <ul style={{ color: '#eee', margin: 0, paddingLeft: '1.2rem' }}>
          {affiliations.map((aff, index) => (
            <li key={index}>{aff}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Affiliations;
