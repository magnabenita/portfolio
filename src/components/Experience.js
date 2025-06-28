import React from 'react';

function Experience() {
  return (
    <section id="experience" style={{
      maxWidth: '900px',
      margin: '2rem auto',
      background: '#563c5c',
      borderRadius: '16px',
      padding: '2rem',
      boxShadow: '0 8px 30px rgba(0,0,0,0.4)'
    }}>
      <h2 style={{ textAlign: 'center', color: '#f6d365' }}>Professional Experience</h2>
      <div style={{
        background: '#32174d',
        padding: '1rem',
        borderRadius: '12px',
        color: '#eee',
        boxShadow: '0 4px 15px rgba(0,0,0,0.4)'
      }}>
        <h3>Digisailor – Intern</h3>
        <p>Thoothukudi | 06/2025 – 07/2025</p>
        <ul>
          <li>Built ecommerce platform using React, Firebase, Chart.js</li>
          <li>Implemented real-time cart, wishlist, admin dashboards</li>
          <li>Contributed to Admin Analytics Dashboard for sales insights</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
