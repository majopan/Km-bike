import React, { useState, useEffect } from 'react';
import '../styles/PromoBanner.css';
import img1 from '../assets/Bici.jpg';
import img2 from '../assets/Bici2.png';
import img3 from '../assets/Bici3.jpg';

const images = [img1, img2, img3];

const PromoBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="promo-banner">
      <div className="carousel-container">
        <div className="carousel">
          <button className="carousel-button prev" onClick={prevSlide}>
            &#8249;
          </button>
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="promo-image"
          />
          <button className="carousel-button next" onClick={nextSlide}>
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;