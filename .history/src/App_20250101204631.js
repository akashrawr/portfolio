import React, { useState, useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

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

        <Hero />
        <About />
        <Portfolio />
        <Contact />
        <LoginPage />
      </main>
      <Footer />
    </div>
    </Router>
  );
}

export default App;