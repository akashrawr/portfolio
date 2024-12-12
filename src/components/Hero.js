import React from 'react';

function Hero() {
  return (
    <section id="hero">
      <div className="hero-main-container">
        {/* Text and Button Container */}
        <div className="hero-container">
          <div className="hero-text-container" data-aos="fade-up">
            <p>Bula there,</p>
            <h2>I am Akash Mishra.</h2>
            <p>A 2nd Year Student In Software Engineering.</p>
          </div>
          <a href="#contact" className="hero-button" data-aos="fade-up">
            Let's connect!
          </a>
        </div>

        {/* Image Container */}
        <div className="hero-img" data-aos="fade-up">
          <img className="hero-image" src="./assets/images/akash.jpg" alt="akash" />
        </div>
      </div>
    </section>
  );
}

export default Hero;