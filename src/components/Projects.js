import React from 'react';

function Projects() {
  const projects = [
    "Network Reliability Optimization using Dijkstra’s algorithm and backtracking (Solo Project)",
    "Hands-Free Cart Design using SCAMPER & TRIZ techniques for smart luggage system (Team of 6)",
    "COVID-19 Dashboard built with EDA and data visualization techniques (Solo Project)",
    "AI Mental Health Monitor using NLP and speech analysis for early detection (Team of 5)",
    "Skin Tone-Based Dress Recommender using deep learning and rule-based fashion logic (Team of 3)",
    "Smart Fridge Magnet IoT system for food tracking and recipe suggestions (Team of 3)",
    "Eye Disease Detection using ResNet and XAI with image sizes 128x128, 224x224, and 448x448 (Team of 2)",
    "Fly Repellent System with multimodal sensors (Solo Project)",
    "ResNet 24 AI Image Classifier using custom ML pipeline (Team of 4)",
    "CKD Detection with hybrid ResNet and EfficientNetB0 on ultrasound images (Team Project)",
    "E-commerce Website built for internship using MERN stack (Solo Project)"
  ];

  return (
    <section id="projects" style={{
      maxWidth: '900px',
      margin: '2rem auto',
      background: '#563c5c',
      borderRadius: '16px',
      padding: '2rem',
      boxShadow: '0 8px 30px rgba(0,0,0,0.4)'
    }}>
      <h2 style={{ textAlign: 'center', color: '#f6d365' }}>Projects & Accomplishments</h2>
      {projects.map((proj, index) => (
        <div key={index} style={{
          background: '#32174d',
          padding: '1rem',
          borderRadius: '12px',
          margin: '1rem 0',
          color: '#eee',
          boxShadow: '0 4px 15px rgba(0,0,0,0.4)'
        }}>
          {proj}
        </div>
      ))}
    </section>
  );
}

export default Projects;
