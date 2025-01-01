import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'; // Import Link component

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
            <Link className="nav-link" to="/about" onClick={toggleNav}>About</Link>
          </li>
          <li>
            <Link className="nav-link" to="/portfolio" onClick={toggleNav}>Portfolio</Link>
          </li>
          <li>
            <Link className="nav-link" to="/contact" onClick={toggleNav}>Contact</Link>
          </li>
          <li>
            <Link className="nav-link" to="/login" onClick={toggleNav}>Login</Link> {/* Add login link */}
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
                    <path fill="#FEBF10" d="M213.4 436.9c-2.8-3.5-7.9-5.5-11.9-7.3-4.2-1.9-8.6-3.4-12.8-5.4-4.9-2.4-9.2-5.6-14-8.1-2.7 9.7-1.2 19-1.1 29.1.1 8.8-.4 17.8 1.2 26.4 5.6-2.4 11.1-5.5 16.2-8.8 7.4-4.7 16.5-10.4 21-18.3C213.1 442.7 215.1 439.1 213.4 436.9zM379.5 227.4c-15.5-43.6-57.8-72.5-104-73.1-12.6-.2-25.3 1.2-37.3 5.5-12.8 4.7-24.5 11.7-35.1 20.2-9.6 7.7-18.7 16.6-26.8 25.8-5.2 5.9-11.5 13.6-12.4 21.7-2.4 6.5-2.9 13.5-3.4 20.5-1.7 10-2.9 20.2-3.8 30.3-1.2 13.6-1.5 27.4.9 40.9 2.2 12.5 7.1 25.1 15.7 34.6 10.4 11.3 24.4 18.8 39.1 23 13.8 4 28 5.8 42.3 6.7 13.8.9 27.8 2 41.5 1.4 26.5-1.1 53.5-9.1 71.5-29.7C397.7 321.1 393.7 267.4 379.5 227.4zM253.8 246.7c-4.4 7.8-12 14.5-20.8 16.8-10 2.6-17.7-3.3-21.4-12.4-1.5-3.9 2.2-6.8 5.7-6.6.2 0 .3 0 .5 0 2 .2 3.3 1.9 3.8 3.7 0-.2-.1-.4-.1-.6.6.9.9 1.8.9 2.7 5.5 8.1 16.4.7 21.4-6.4.5-1.9 1.6-3.3 3.9-4.2C251.7 238.1 256 243 253.8 246.7zM312.2 316.4c-2.5 9.5-7.9 21.9-18.7 24.3-11.9 2.6-24.3-3.6-27.9-15.6-1.8-6.2 7.6-9.5 9.4-3.3 2.1 7 10.4 12.2 17.5 8.7 5.7-2.9 8.4-10.2 9.9-16C304 308.3 313.9 310.2 312.2 316.4zM343.2 235.4c-2.7 8.1-6.1 16.8-15 19.5-9.6 2.9-20.1-4.1-23.6-12.8-2.4-6 7-9.3 9.4-3.3 1.7 4.1 8.4 9.1 12.9 5.9 2.2-1.6 3.6-3.9 4.7-6.4-.8-1.6-.8-3.5.9-5.1.7-.7 1.3-1.3 2-2C337.7 228.1 345 230.3 343.2 235.4zM332.4 446.9c-.6-5.2 3.1-9.7 7.4-12.1 9.2-5.8 18.6-12.1 27.6-18.9-2.5 6.4-3.9 13.7-8.5 19.5-5.6 5.8-13.3 10.4-21.6 9.8-2.3 0-4.5-1.2-6.1-2.6-2.5 6.3-4.1 14.1-9 19.8z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="white" viewBox="0 0 48 48">
                    <path d="M24 36C16.268 36 10 29.732 10 24C10 18.268 16.268 12 24 12C31.732 12 38 18.268 38 24C38 29.732 31.732 36 24 36ZM24 30C19.58 30 16 26.42 16 24C16 21.58 19.58 18 24 18C28.42 18 32 21.58 32 24C32 26.42 28.42 30 24 30ZM24 2C19.15 2 14.55 3.84 11.61 7.21C13.77 7.6 15.79 9.04 16.93 11.1C18.68 13.57 18.49 16.84 17.05 19.35C19.08 19.77 21 21.42 21.9 23.37C24.71 23.98 28.06 24.48 31.22 24.95C30.15 22.52 31.24 19.22 34.14 19.51C36.35 19.72 37.74 21.74 37.74 24C37.74 26.56 35.67 28.74 33.06 28.74C32.63 28.74 32.21 28.64 31.9 28.48C31.11 28.1 29.95 28.05 29.04 27.34C28.53 26.93 28.34 26.24 28.56 25.62C28.77 25.01 29.88 24.87 30.43 25.07C30.95 25.26 31.42 25.72 31.56 26.19C31.91 26.94 31.3 27.84 30.38 28.02C27.97 28.34 26.02 29.88 24.58 32.37C23.15 34.99 22.39 36.52 24 36ZM16 6.07C18.45 3.12 21.91 2 24 2C26.09 2 29.55 3.12 32 6.07C30.6 5.22 27.74 5.13 24 6C20.88 6.09 18.12 5.22 16 6.07Z" />
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
