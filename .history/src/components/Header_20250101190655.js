import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
          <img className="icon" src="./assets/icons/moon.svg" alt="user login icon" />
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
        </ul>
      </nav>
    </header>
  );
}

export default Header;