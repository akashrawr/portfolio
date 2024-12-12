import React, { useState, useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJava, faHtml5, faJs, faPython, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { SiTypescript, SiCplusplus, FaGithub } from 'react-icons/si';
import { faLaptopCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';



function App() {
  useEffect(() => {
    AOS.init({ once: true, delay: 0 });
  }, []);

  const [isNavVisible, setIsNavVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <div>
      <Header
        isNavVisible={isNavVisible}
        toggleNav={toggleNav}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Main />
      <Footer />
    </div>
  );
}

function Header({ isNavVisible, toggleNav, darkMode, toggleDarkMode }) {
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
          <li>
            <label className="switch" aria-label="Toggle dark mode">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
              aria-checked={darkMode}
            />
            <span className="slider round">
              {/* Display sun icon when darkMode is false (light mode) */}
              {!darkMode ? (
                <img className="icon" src="./assets/icons/sun.svg" alt="Light Mode" />
              ) : (
                // Display moon icon when darkMode is true (dark mode)
                <img className="icon" src="./assets/icons/moon.svg" alt="Dark Mode" />
              )}
            </span>
          </label>
          </li>
                    <li>
            <label className="switch" aria-label="Toggle dark mode">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
              aria-checked={darkMode}
            />
            <span className="slider round">
              {/* Display sun icon when darkMode is false (light mode) */}
              {!darkMode ? (
                <img className="icon" src="./assets/icons/sun.svg" alt="Light Mode" />
              ) : (
                // Display moon icon when darkMode is true (dark mode)
                <img className="icon" src="./assets/icons/moon.svg" alt="Dark Mode" />
              )}
            </span>
          </label>
          </li>

          <li>
            <label className="switch" aria-label="Toggle dark mode">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
              aria-checked={darkMode}
            />
            <span className="slider round">
              {/* Display sun icon when darkMode is false (light mode) */}
              {!darkMode ? (
                <img className="icon" src="./assets/icons/sun.svg" alt="Light Mode" />
              ) : (
                // Display moon icon when darkMode is true (dark mode)
                <img className="icon" src="./assets/icons/moon.svg" alt="Dark Mode" />
              )}
            </span>
          </label>
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
        <FontAwesomeIcon icon={faReact} className="about-icon" />
      </div>
      <div className="tech-stack">
        <FontAwesomeIcon icon={faJava} className="about-icon" />
      </div>
      <div className="tech-stack">
        <FontAwesomeIcon icon={faHtml5} className="about-icon" />
      </div>
      <div className="tech-stack">
        <FontAwesomeIcon icon={faJs} className="about-icon" />
      </div>
      <div className="tech-stack">
        <SiTypescript className="about-icon ts-icon" />
      </div>
      <div className="tech-stack">
        <SiCplusplus className="about-icon cpp-icon" />
      </div>
      <div className="tech-stack">
        <FontAwesomeIcon icon={faPython} className="about-icon" />
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

            {/* Project Container */}
            <div className="project-container">

              {/* SMS */}
              <section className="project-card">
                <img
                  className="project-img"
                  src="./assets/images/SMS.gif"
                  alt="project-SMS"
                />
                <h3>Student Management System</h3>
                <h5>Project Description</h5>
                <p>
                  This is an application built using Spring Boot, adhering to MVC architecture.
                  It provides functionalities for managing student records.
                </p>

                <div className="project-card-links">
                  <a href="https://github.com/akashrawr/Student-Management-System-Springboot.git" className="project-link">
                    <FontAwesomeIcon icon={faGithub} className="project-icons" />
                    Repository
                  </a>
                </div>
              </section>

              {/* Health Appointment Website */}
              <section className="project-card">
                <img
                  className="project-img"
                  src="./assets/images/health.gif"
                  alt="project-Health"
                />
                <h3>Health Appointment Website</h3>
                <h5>Project Description</h5>
                <p>
                  A user-friendly web application built using ASP.NET, designed to manage patient appointments efficiently.
                </p>

                <div className="project-card-links">
                  <a href="https://github.com/akashrawr/Medical_Website.git" className="project-link">
                    <FontAwesomeIcon icon={faGithub} className="project-icons" />
                    Repository
                  </a>
                </div>
              </section>

              {/* Chess */}
              <section className="project-card">
                <img
                  className="project-img"
                  src="./assets/images/chess.gif"
                  alt="project-Chess"
                />
                <h3>Chess</h3>
                <h5>Project Description</h5>
                <p>
                  A Java RMI-based chess game capable of hosting up to six players simultaneously.
                </p>

                <div className="project-card-links">
                  <a href="https://github.com/akashrawr/ChessRMI.git" className="project-link">
                    <FontAwesomeIcon icon={faGithub} className="project-icons" />
                    Repository
                  </a>
                </div>
              </section>

              {/* Rock-Paper-Scissors */}
              <section className="project-card">
                <img
                  className="project-img"
                  src="./assets/images/rps.gif"
                  alt="project-RPS"
                />
                <h3>Rock-Paper-Scissors</h3>
                <h5>Project Description</h5>
                <p>
                  A multiplayer game using Java RMI, allowing two players to compete in real-time and a MySQL database for user tracking.
                </p>

                <div className="project-card-links">
                  <a href="https://github.com/akashrawr/RockPaperScissors-RMI.git" className="project-link">
                    <FontAwesomeIcon icon={faGithub} className="project-icons" />
                    Repository
                  </a>
                </div>
              </section>

              {/* Weather App */}
              <section className="project-card">
                <img
                  className="project-img"
                  src="./assets/images/weather.gif"
                  alt="project-Weather-App"
                />
                <h3>Weather App</h3>
                <h5>Project Description</h5>
                <p>
                  A weather forecasting application built using React and TypeScript. It utilizes an external API to fetch real-time weather data.
                </p>

                <div className="project-card-links">
                  <a href="https://weatherapp-react-ts.vercel.app/" className="project-link">
                    <FontAwesomeIcon icon={faLaptopCode} className="project-icons" />
                    Live Demo
                  </a>
                  <a href="https://github.com/akashrawr/WeatherApp-React-TS.git" className="project-link">
                    <FontAwesomeIcon icon={faGithub} className="project-icons" />
                    Repository
                  </a>
                </div>
              </section>

              {/* Movie List App */}
              <section className="project-card">
                <img
                  className="project-img"
                  src="./assets/images/movielist.gif"
                  alt="project-Movielist"
                />
                <h3>Movie List App</h3>
                <h5>Project Description</h5>
                <p>
                  A React-based application to create and manage a personal movie watchlist with local storage integration for saving data.
                </p>

                <div className="project-card-links">
                  <a href="https://watch-list.vercel.app/" className="project-link">
                    <FontAwesomeIcon icon={faLaptopCode} className="project-icons" />
                    Live Demo
                  </a>
                  <a href="https://github.com/akashrawr/MovieWatchList-React.git" className="project-link">
                    <FontAwesomeIcon icon={faGithub} className="project-icons" />
                    Repository
                  </a>
                </div>
              </section>

              {/* N-Queen Solver */}
              <section className="project-card">
                <img
                  className="project-img"
                  src="./assets/images/nqueen.gif"
                  alt="project-Nqueen"
                />
                <h3>N-Queen Solver</h3>
                <h5>Project Description</h5>
                <p>
                  A Java-based solution to the N-Queen problem, implementing different types of algorithms to find various queen placements on a chessboard.
                </p>

                <div className="project-card-links">
                  <a href="https://github.com/akashrawr/N-Queen-Solver.git" className="project-link">
                    <FontAwesomeIcon icon={faGithub} className="project-icons" />
                    Repository
                  </a>
                </div>
              </section>

              {/* Coming Soon */}
              <section className="project-card">
                <img
                  className="project-img"
                  src="./assets/images/coming-soon.gif"
                  alt="project-Soon"
                />
                <h3>Project name</h3>
                <h5>Project description</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas ornare lorem ullamcorper gravida. In venenatis in diam ut tempor.
                </p>

                <div className="project-card-links">
                  <a href="#" className="project-link">
                    <FontAwesomeIcon icon={faLaptopCode} className="project-icons" />
                    Live Demo
                  </a>
                  <a href="#" className="project-link">
                    <FontAwesomeIcon icon={faGithub} className="project-icons" />
                    Repository
                  </a>
                </div>
              </section>

            </div>
            {/* End of Project Container */}
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
          <h2>Contacts</h2>
          <p>You can contact me directly through these links</p>

          <div className="contact-links">
            <a href="https://www.instagram.com/_acnologxa" className="contact-link">
              <FontAwesomeIcon icon={faInstagram} className="contact-icons" />
              Instagram
            </a>

            <a href="mailto:akashkm553@gmail.com" className="contact-link">
              <FontAwesomeIcon icon={faEnvelope} className="contact-icons" />
              Email
            </a>

            <a href="https://www.linkedin.com/in/akashmishra-rawr" className="contact-link">
              <FontAwesomeIcon icon={faLinkedin} className="contact-icons" />
              LinkedIn
            </a>

            <a href="https://github.com/akashrawr" className="contact-link">
              <FontAwesomeIcon icon={faGithub} className="contact-icons" />
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
        © Portfolio by Akash Mishra <br/>
        <a href="#hero">Back to the top</a>
      </div>
    </footer>
  );
}

export default App;
