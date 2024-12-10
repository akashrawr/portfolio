import React, { useState, useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({ once: true, delay: 0 });
  }, []);

  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <div>
      <Header isNavVisible={isNavVisible} toggleNav={toggleNav} />
      <Main />
      <Footer />
    </div>
  );
}

function Header({ isNavVisible, toggleNav }) {
  return (
    <header>
      <nav className="navbar-nav">
        <div className="nav-logo">
          <h1>Rawr</h1>
        </div>

        <button
          className="mobile-nav-toggle"
          aria-controls="primary-nav"
          aria-expanded={isNavVisible}
          onClick={toggleNav}
        ></button>

        <ul
          id="primary-nav"
          className={`primary-nav ${isNavVisible ? 'visible' : ''}`}
          data-visible={isNavVisible}
        >
          <li>
            <a className="nav-link" href="#about">About</a>
          </li>
          <li>
            <a className="nav-link" href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a className="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Main() {
  return (
    <main>
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </main>
  );
}

function Hero() {
  return (
    <section id="hero">
      <div className="hero-container">
        <div className="hero-text-container" data-aos="fade-up">
          <p>Bula there,</p>
          <h2>I am Akash Mishra</h2>
          <p>A 2nd Year Student In Software Engineering.</p>
        </div>
        <a href="#contact" className="hero-button" data-aos="fade-up">
          Let's connect!
        </a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about">
      <div className="section-highlight" data-aos="fade-up">ABOUT</div>
      <div className="about-container" data-aos="fade-up">
        <div className="about-card">
          <section className="about-content">
            <h2> About</h2>
            <p>I am currently a 2nd Year Student in University of the South Pacific pursuing a degree in Bachelor of Software Engineering.</p>
            <p>I love Coding & Painting.</p>
          </section>

          <section className="about-content tech-stack-section">
            <h3>My current tech stack</h3>
            <div className="tech-stack-grid">
              
              <div className="tech-stack">
                <img src="./assets/icons/react.svg" alt="react-icon" />
              </div>
              <div className="tech-stack">
                <img src="./assets/icons/java-icon.svg" alt="java-icon" />
              </div>
              <div className="tech-stack">
                <img src="./assets/icons/html5.svg" alt="html5-icon" />
              </div>
              <div className="tech-stack">
                <img src="./assets/icons/icon-js.svg" alt="javascript-icon" />
              </div>
              <div className="tech-stack">
                <img src="./assets/icons/icon-typescript.svg" alt="typescript-icon" />
              </div>
              <div className="tech-stack">
                <img src="./assets/icons/icon-c++.svg" alt="c++-icon" />
              </div>
              <div className="tech-stack">
                <img src="./assets/icons/icon-python.svg" alt="python-icon" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio">
      <div className="section-highlight" data-aos="fade-up">
        Portfolio
      </div>
      <div className="portfolio-container" data-aos="fade-up">
        <div className="portfolio-card">
          <div className="portfolio-content">
            <h2>Portfolio</h2>

            {/* Project Card */}
            <div class="project-container">
                <section class="project-card">
                  <img
                    class="project-img"
                    src="./assets/images/forkify-overview (1).png"
                    alt="project-1"
                  />
                  <h3>Project name</h3>
                  <h5>Project description</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque egestas ornare lorem ullamcorper gravida. In
                    venenatis in diam ut tempor.
                  </p>

                  <div class="project-card-links">
                    <a href="#">
                      <img
                        class="project-icons"
                        src="./assets/icons/live-demo.svg"
                        alt="live-demo"
                      />
                      Live demo
                    </a>
                    <a href="#">
                      <img
                        class="project-icons"
                        src="./assets/icons/github-icon.svg"
                        alt="live-demo"
                      />
                      Repository
                    </a>
                  </div>
                </section>
            {/* End of Project Card */}

            <div className="project-card">
              <img
                className="project-img"
                src="./assets/images/SMS.gif"
                alt="project-1"
              />
              <h3>Student Management System</h3>
              <h5>Project description</h5>
              <p>This is a springboot application</p>

              <div className="project-card-links">
                <a href="https://github.com/akashrawr/Student-Management-System-Springboot.git">
                  <img
                    className="project-icons"
                    src="./assets/icons/live-demo.svg"
                    alt="live-demo"
                  />
                  Live demo
                </a>
                <a href="https://github.com/akashrawr/Student-Management-System-Springboot.git">
                  <img
                    className="project-icons"
                    src="./assets/icons/github-icon.svg"
                    alt="repository"
                  />
                  Repository
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function Contact() {
  return (
    <section id="contact">
      <h2 className="section-highlight" data-aos="fade-up">Contacts</h2>
      <div className="contact-container" data-aos="fade-up">
        <div className="contact-card">
          <h2> Contacts</h2>
          <p>You can contact me directly through these links</p>

          <div className="contact-links">
            <a href="#">
              <img
                className="contact-icons"
                src="./assets/icons/linkedin-icon.svg"
                alt="linkedin-icon"
              />
              LinkedIn
            </a>

            <a href="#">
              <img
                className="contact-icons"
                src="./assets/icons/twitter-icon.svg"
                alt="twitter-icon"
              />
              Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        Template made with 💞 by
        <a href="https://github.com/chaaals" target="_blank" rel="noopener noreferrer">
          Charles Ching
        </a>
      </div>
    </footer>
  );
}

export default App;
