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
          
          <img
                    src="./assets/images/rawr1.png"
                    alt="logo"
                  />
        
        </div>
        <h1>Rawr</h1>

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

                {/* SMS */}
                <section class="project-card">
                  <img
                    class="project-img"
                    src="./assets/images/SMS.gif"
                    alt="project-1"
                  />
                  <h3>Student Management System</h3>
                  <h5>Project description</h5>
                  <p>
                  Application made in Springboot.
                  </p>

                  <div class="project-card-links">
                    <a href="https://github.com/akashrawr/Student-Management-System-Springboot.git">
                      <img
                        class="project-icons"
                        src="./assets/icons/github-icon.svg"
                        alt="live-demo"
                      />
                      Repository
                    </a>
                  </div>
                </section>

                {/* Nqueen */}
                <section class="project-card">
                  <img
                    class="project-img"
                    src="./assets/images/nqueen.gif"
                    alt="project-1"
                  />
                  <h3>N-Queen Solver</h3>
                  <h5>Project description</h5>
                  <p>
                    Made in Java.
                  </p>

                  <div class="project-card-links">
                    <a href="https://github.com/akashrawr/N-Queen-Solver.git">
                      <img
                        class="project-icons"
                        src="./assets/icons/github-icon.svg"
                        alt="live-demo"
                      />
                      Repository
                    </a>
                  </div>
                </section>

                {/* Health Appointment */}        
                <section class="project-card">
                <img
                    class="project-img"
                    src="./assets/images/health.gif"
                    alt="project-1"
                  />
                  <h3>Health Appointment Website</h3>
                  <h5>Project description</h5>
                  <p>
                    Aspx, made in visual studio.
                  </p>

                  <div class="project-card-links">
                    <a href="https://github.com/akashrawr/Medical_Website.git">
                      <img
                        class="project-icons"
                        src="./assets/icons/github-icon.svg"
                        alt="live-demo"
                      />
                      Repository
                    </a>
                  </div>
                </section>

                {/* Rock Paper Scissors */}        
                <section class="project-card">
                <img
                    class="project-img"
                    src="./assets/images/rps.gif"
                    alt="project-1"
                  />
                  <h3>Rock-Paper-Scissors</h3>
                  <h5>Project description</h5>
                  <p>
                  This project is a multiplayer Rock-Paper-Scissors game that allows clients to connect and play against each other. The server is managed by an admin, and the game requires two clients to start. The project uses a MySQL database and external JAR files for dependencies.
                  </p>

                  <div class="project-card-links">
                    <a href="https://github.com/akashrawr/RockPaperScissors-RMI.git">
                      <img
                        class="project-icons"
                        src="./assets/icons/github-icon.svg"
                        alt="live-demo"
                      />
                      Repository
                    </a>
                  </div>
                </section>

                {/* Chess RMI */}        
                <section class="project-card">
                <img
                    class="project-img"
                    src="./assets/images/chess.gif"
                    alt="project-1"
                  />
                  <h3>Chess</h3>
                  <h5>Project description</h5>
                  <p>
                    Java RMI, This program can host up to 6 players in total.
                  </p>

                  <div class="project-card-links">
                    <a href="https://github.com/akashrawr/ChessRMI.git">
                      <img
                        class="project-icons"
                        src="./assets/icons/github-icon.svg"
                        alt="live-demo"
                      />
                      Repository
                    </a>
                  </div>
                </section>

                {/* Movielist App */}        
                <section class="project-card">
                <img
                    class="project-img"
                    src="./assets/images/movielist.gif"
                    alt="project-1"
                  />
                  <h3>Movie List App</h3>
                  <h5>Project description</h5>
                  <p>
                    Made in React.
                  </p>

                  <div class="project-card-links">
                    <a href="https://watch-list.vercel.app/">
                      <img
                        class="project-icons"
                        src="./assets/icons/live-demo.svg"
                        alt="live-demo"
                      />
                      Live demo
                    </a>
                    <a href="https://github.com/akashrawr/MovieWatchList-React.git">
                      <img
                        class="project-icons"
                        src="./assets/icons/github-icon.svg"
                        alt="live-demo"
                      />
                      Repository
                    </a>
                  </div>
                </section>

                 {/* Weather App */}        
                 <section class="project-card">
                <img
                    class="project-img"
                    src="./assets/images/weather.gif"
                    alt="project-1"
                  />
                  <h3>Weather App</h3>
                  <h5>Project description</h5>
                  <p>
                    Made in React.
                  </p>

                  <div class="project-card-links">
                    <a href="https://weatherapp-react-ts.vercel.app/">
                      <img
                        class="project-icons"
                        src="./assets/icons/live-demo.svg"
                        alt="live-demo"
                      />
                      Live demo
                    </a>
                    <a href="https://github.com/akashrawr/WeatherApp-React-TS.git">
                      <img
                        class="project-icons"
                        src="./assets/icons/github-icon.svg"
                        alt="live-demo"
                      />
                      Repository
                    </a>
                  </div>
                </section>
              </div>
            {/* End of Project Card */}
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
            <a href="https://www.instagram.com/_acnologxa">
              <img
                className="contact-icons"
                src="./assets/icons/instagram.svg"
                alt="Instagram-icon"
              />
              Instagram
            </a>

            <a href="mailto:akashkm553@gmail.com">
            <img
              className="contact-icons"
              src="./assets/icons/email.svg"
              alt="email-icon"
            />
            Email
            </a>

            <a href="https://www.linkedin.com/in/akashmishra-rawr">
              <img
                className="contact-icons"
                src="./assets/icons/linkedin-icon.svg"
                alt="linkedin-icon"
              />
              LinkedIn
            </a>

            <a href="https://github.com/akashrawr">
              <img
                className="contact-icons"
                src="./assets/icons/github.svg"
                alt="Github-icon"
              />
              Github
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
        Made by Akash. Rawr.
      </div>
    </footer>
  );
}

export default App;
