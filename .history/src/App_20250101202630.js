import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage'; // Import LoginPage component

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
    <Router>
      <div>
        <Header
          isNavVisible={isNavVisible}
          toggleNav={toggleNav}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LoginPage />} /> {/* Add Login route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
