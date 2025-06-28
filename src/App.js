import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import LanguagesHobbies from './components/LanguagesHobbies';
import Affiliations from './components/Affiliations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="single-column-container">
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <LanguagesHobbies />
        <Affiliations />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
