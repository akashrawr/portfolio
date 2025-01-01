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
          <li>
          {/* User Login Button */}
          <svg class="user-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M 12 3 A 4 4 0 0 0 8 7 A 4 4 0 0 0 12 11 A 4 4 0 0 0 16 7 A 4 4 0 0 0 12 3 z M 12 14 C 8.996 14 3 15.508 3 18.5 L 3 20 C 3 20.552 3.448 21 4 21 L 20 21 C 20.552 21 21 20.552 21 20 L 21 18.5 C 21 15.508 15.004 14 12 14 z"/>
          </svg>
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
                  <svg
                    className="icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="24"
                    height="24"
                  >
                    <path
                      fill="#FEBF10"
                      d="M213.4 436.9c-2.8-3.5-7.9-5.5-11.9-7.3-4.2-1.9-8.6-3.4-12.8-5.4-4.9-2.4-9.2-5.6-14-8.1-2.7 9.7-1.2 19-1.1 29.1.1 8.8-.4 17.8 1.2 26.4 5.6-2.4 11.1-5.5 16.2-8.8 7.4-4.7 16.5-10.4 21-18.3C213.1 442.7 215.1 439.1 213.4 436.9z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path
                      fill="#000000"
                      d="M12 7a5 5 0 100 10 5 5 0 000-10zm0-4a9 9 0 11-9 9 9 9 0 019-9z"
                    />
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
