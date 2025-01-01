import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Import the 'user' icon

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
        >
          <FontAwesomeIcon icon="fa-solid fa-angles-left" />
        </button>

        <ul
          id="primary-nav"
          className={`primary-nav ${isNavVisible ? 'visible' : ''}`}
          data-visible={isNavVisible}
        >
          <li>
            <a className="nav-link" href="#about" onClick={toggleNav}>About</a>
          </li>
          <li>
            <a className="nav-link" href="#portfolio" onClick={toggleNav}>Portfolio</a>
          </li>
          <li>
            <a className="nav-link" href="#contact" onClick={toggleNav}>Contact</a>
          </li>
          {/* User Login Button */}
          <li>
            <button className="user-login-button" aria-label="User Login">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6.75a3 3 0 11-6 0 3 3 0 016 0zM4.5 18a8.25 8.25 0 0115 0"
                  />
                </svg>
              </div>
            </button>
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
                {!darkMode ? (
                  <img className="icon" src="./assets/icons/sun.svg" alt="Light Mode" />
                ) : (
                  <img className="icon" src="./assets/icons/moon.svg" alt="Dark Mode" />
                )}
              </span>
            </label>
          </li>
          {/* User Login Button */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
