import React, { useEffect, useState } from 'react';
import supabase from './supabaseClient';

function Hero() {
  const [heroImage, setHeroImage] = useState(null);

  useEffect(() => {
    const fetchHeroImage = async () => {
      const { data, error } = await supabase
        .from('hero')
        .select('image_path')
        .limit(1);

      if (error) {
        console.error('Error fetching hero image:', error);
      } else {
        setHeroImage(data[0]?.image_path);
      }
    };

    fetchHeroImage();
  }, []);

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
          {heroImage ? (
            <img className="hero-image" src={heroImage} alt="Akash" />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;
