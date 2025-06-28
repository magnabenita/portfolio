import React from 'react';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

function Home() {
  return (
    <div>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
