import React from 'react';
import { Element } from 'react-scroll';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/footer';  

function App() {
  return (
    <Element name="top">
      <div className="App">
        <Header />
        <div className="content-container">
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
        <Footer />
      </div>
    </Element>
  );
}

export default App;