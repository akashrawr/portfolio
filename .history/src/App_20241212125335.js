import React, { useState, useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJava, faHtml5, faJs, faPython, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { SiTypescript, SiCplusplus } from 'react-icons/si';
import { faLaptopCode, faEnvelope, faAngleDoubleRight, faAnglesLeft } from '@fortawesome/free-solid-svg-icons';


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



const projects = [
  {
    imgSrc: './assets/images/SMS.gif',
    altText: 'project-SMS',
    title: 'Student Management System',
    description: 'This is an application built using Spring Boot, adhering to MVC architecture. It provides functionalities for managing student records.',
    repoLink: 'https://github.com/akashrawr/Student-Management-System-Springboot.git',
  },
  {
    imgSrc: './assets/images/health.gif',
    altText: 'project-Health',
    title: 'Health Appointment Website',
    description: 'A user-friendly web application built using ASP.NET, designed to manage patient appointments efficiently.',
    repoLink: 'https://github.com/akashrawr/Medical_Website.git',
  },
  {
    imgSrc: './assets/images/chess.gif',
    altText: 'project-Chess',
    title: 'Chess',
    description: 'A Java RMI-based chess game capable of hosting up to six players simultaneously.',
    repoLink: 'https://github.com/akashrawr/ChessRMI.git',
  },
  {
    imgSrc: './assets/images/rps.gif',
    altText: 'project-RPS',
    title: 'Rock-Paper-Scissors',
    description: 'A multiplayer game using Java RMI, allowing two players to compete in real-time and a MySQL database for user tracking.',
    repoLink: 'https://github.com/akashrawr/RockPaperScissors-RMI.git',
  },
  {
    imgSrc: './assets/images/weather.gif',
    altText: 'project-Weather-App',
    title: 'Weather App',
    description: 'A weather forecasting application built using React and TypeScript. It utilizes an external API to fetch real-time weather data.',
    repoLink: 'https://weatherapp-react-ts.vercel.app/',
    liveDemoLink: 'https://github.com/akashrawr/WeatherApp-React-TS.git',
  },
  {
    imgSrc: './assets/images/movielist.gif',
    altText: 'project-Movielist',
    title: 'Movie List App',
    description: 'A React-based application to create and manage a personal movie watchlist with local storage integration for saving data.',
    repoLink: 'https://github.com/akashrawr/MovieWatchList-React.git',
    liveDemoLink: 'https://watch-list.vercel.app/',
  },
  {
    imgSrc: './assets/images/nqueen.gif',
    altText: 'project-Nqueen',
    title: 'N-Queen Solver',
    description: 'A Java-based solution to the N-Queen problem, implementing different types of algorithms to find various queen placements on a chessboard.',
    repoLink: 'https://github.com/akashrawr/N-Queen-Solver.git',
  },
  {
    imgSrc: './assets/images/coming-soon.gif',
    altText: 'project-Soon',
    title: 'Project Name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas ornare lorem ullamcorper gravida. In venenatis in diam ut tempor.',
    repoLink: '#',
    liveDemoLink: '#',
  },
];


function Portfolio() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  // Calculate total pages
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  // Calculate current projects to display
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

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
              {currentProjects.map((project, index) => (
                <section className="project-card" key={index}>
                  <img
                    className="project-img"
                    src={project.imgSrc}
                    alt={project.altText}
                  />
                  <h3>{project.title}</h3>
                  <h5>Project Description</h5>
                  <p>{project.description}</p>
                  <div className="project-card-links">
                    <a href={project.repoLink} className="project-link">
                      <FontAwesomeIcon icon={faGithub} className="project-icons" />
                      Repository
                    </a>
                    {project.liveDemoLink && (
                      <a href={project.liveDemoLink} className="project-link">
                        <FontAwesomeIcon icon={faLaptopCode} className="project-icons" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </section>
              ))}
            </div>
            {/* End of Project Container */}

            {/* Pagination Controls */}
            <div className="pagination">
              <a href="#!" onClick={handlePrevious} disabled={currentPage === 1}>
                <FontAwesomeIcon icon={faAnglesLeft} className="project-icons" />
              </a>
              {[...Array(totalPages)].map((_, index) => (
                <a
                  key={index + 1}
                  href="#!"
                  onClick={() => handlePageClick(index + 1)}
                  className={currentPage === index + 1 ? 'active' : ''}
                >
                  {index + 1}
                </a>
              ))}
              <a href="#!" onClick={handleNext} disabled={currentPage === totalPages}>
                <FontAwesomeIcon icon={faAngleDoubleRight} className="project-icons" />
              </a>
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
