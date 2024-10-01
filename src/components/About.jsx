import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
  const [flipped, setFlipped] = useState(false);
  const { ref: aboutRef, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      setFlipped(true);
    } else {
      setFlipped(false);
    }
  }, [inView]);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-dark-100"
      ref={aboutRef}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center font-mono">
        <div className="flip-container">
          <div className={`flip-content ${flipped ? 'flipped' : ''}`}>
            <img
              src="src/assets/ninjaHead.jpeg" // Front image
              alt="Front Image"
              className="front w-64 h-64 rounded-full"
            />
            <img
              src="src/assets/manojPP.jpeg" // Back image, from the file you uploaded
              alt="Back Image"
              className="back w-64 h-64 rounded-full"
            />
          </div>
        </div>
        <div className="md:ml-8 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl mb-6">
            I am a recent Computer Programming and Analysis graduate from Seneca College, passionate about web development and creating efficient software solutions. Currently, seeking junior developer roles where I can apply my skills and software engineering principles. Eager to learn and grow in a dynamic tech environment.
          </p>

          {/* Button for Resume */}
          <a
            href="https://drive.google.com/file/d/10Y1s4LlZtGaNPqQTAw_K-ps8kzhXgvMt/view?usp=sharing" // Replace this with the actual path to your resume
            className="resume-btn bg-dark-green text-white py-2 px-4 rounded-full"
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Security best practice when using target="_blank"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
