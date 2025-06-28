import React from 'react';

function LanguagesHobbies() {
  return (
    <section id="languages-hobbies" style={{
      maxWidth: '900px',
      margin: '2rem auto',
      background: '#563c5c',
      borderRadius: '16px',
      padding: '2rem',
      boxShadow: '0 8px 30px rgba(0,0,0,0.4)'
    }}>
      <h2 style={{ textAlign: 'center', color: '#f6d365' }}>Languages & Hobbies</h2>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div style={{
          background: '#32174d',
          borderRadius: '12px',
          padding: '1rem',
          color: '#eee',
          width: '40%'
        }}>
          <h3>Languages</h3>
          <ul>
            <li>English: C2</li>
            <li>Tamil: C2</li>
            <li>Hindi: B1</li>
            <li>German: A1</li>
          </ul>
        </div>
        <div style={{
          background: '#32174d',
          borderRadius: '12px',
          padding: '1rem',
          color: '#eee',
          width: '40%'
        }}>
          <h3>Hobbies</h3>
          <ul>
            <li>Digital Illustration & Sketching</li>
            <li>Graphic Design (Canva, Figma)</li>
            <li>Creative Writing & Poster Making</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default LanguagesHobbies;
