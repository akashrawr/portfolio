import React, { useEffect, useState } from 'react';
import supabase from '../utils/supabaseClient';  // Adjust path if in 'utils'

function Hero() {
  const [heroImage, setHeroImage] = useState(null);

  // Fetch data from Supabase initially
  const fetchHeroImage = async () => {
    const { data, error } = await supabase
      .from('hero')
      .select('image_path')
      .limit(1); // Fetch the first record

    if (error) {
      console.error('Error fetching hero image:', error);
    } else {
      setHeroImage(data[0]?.image_path); // Set the fetched image path
    }
  };

  // Fetch initial data on page load and subscribe to real-time updates
  useEffect(() => {
    fetchHeroImage();

    // Subscribe to real-time changes in the 'hero' table
    const subscription = supabase
      .from('hero')
      .on('UPDATE', payload => {
        console.log('Hero image updated:', payload);
        fetchHeroImage(); // Re-fetch data after update
      })
      .subscribe();

    // Cleanup on component unmount
    return () => {
      supabase.removeSubscription(subscription);
    };
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
