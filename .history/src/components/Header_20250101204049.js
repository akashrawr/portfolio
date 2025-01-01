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
            <Link className="nav-link" to="/login">
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
                {!darkMode ? (
                  <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="48px" height="48px">
                    <path fill="#FEBF10" d="M213.4 436.9c-2.8-3.5-7.9-5.5-11.9-7.3-4.2-1.9-8.6-3.4-12.8-5.4-4.9-2.4-9.2-5.6-14-8.1-2.7 9.7-1.2 19-1.1 29.1.1 8.8-.4 17.8 1.2 26.4 5.6-2.4 11.1-5.5 16.2-8.8 7.4-4.7 16.5-10.4 21-18.3C213.1 442.7 215.1 439.1 213.4 436.9z" />
                  </svg>
                ) : (
                  <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="48px" height="48px">
                    <path fill="#FEBF10" d="M213.4 436.9c-2.8-3.5-7.9-5.5-11.9-7.3-4.2-1.9-8.6-3.4-12.8-5.4-4.9-2.4-9.2-5.6-14-8.1-2.7 9.7-1.2 19-1.1 29.1.1 8.8-.4 17.8 1.2 26.4 5.6-2.4 11.1-5.5 16.2-8.8 7.4-4.7 16.5-10.4 21-18.3C213.1 442.7 215.1 439.1 213.4 436.9z" />
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
