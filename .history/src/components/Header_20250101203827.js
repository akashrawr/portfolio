import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link className="nav-link" to="#about" onClick={toggleNav}>About</Link>
          </li>
          <li>
            <Link className="nav-link" to="#portfolio" onClick={toggleNav}>Portfolio</Link>
          </li>
          <li>
            <Link className="nav-link" to="#contact" onClick={toggleNav}>Contact</Link>
          </li>
          <li>
            <Link className="nav-link" to="/login" onClick={toggleNav}>
              <button
                className="user-login-button"
                aria-label="User Login"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                <svg
                  className="user-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 3a4 4 0 100 8 4 4 0 000-8zm0 11c-3.004 0-9 1.508-9 4.5V20a1 1 0 001 1h16a1 1 0 001-1v-1.5c0-2.992-5.996-4.5-9-4.5z" />
                </svg>
              </button>
            </Link>
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
                {darkMode ? (
                  // Dark mode icon
                  <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="48px" height="48px">
                    <path fill="#FEBF10" d="M213.4 436.9c-2.8-3.5-7.9-5.5-11.9-7.3..."/>
                  </svg>
                ) : (
                  // Light mode icon
                  <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="48px" height="48px">
                    <path fill="#FEBF10" d="M213.4 436.9c-2.8-3.5-7.9-5.5-11.9-7.3..."/>
                  </svg>
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
