import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import image1 from '../assets/fashion (1).jpg';
import image2 from '../assets/fashion (2).jpg';
import image3 from '../assets/fashion (3).jpg';
import image4 from '../assets/fashion (4).jpg';

const images = [image1, image2, image3, image4]; // Array of local images
const texts = [
  "Fashion for the Bold",
  "Style Meets Elegance",
  "Unleash Your Confidence",
  "Timeless Trends, Endless Style",
]; // Array of text corresponding to each image

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Timer: Automatically switch slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // 5000ms = 5 seconds

    return () => clearInterval(timer); // Clear timer on unmount
  }, []);

  return (
    <div className="slider-container">
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          className="slider-wrapper"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
        >
          {/* Image */}
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="slider-image"
          />
          {/* Text Overlay with Animation */}
          <motion.div
            className="slider-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }} // Delay text animation
          >
            <h2>{texts[currentIndex]}</h2>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button className="prev-button" onClick={prevSlide}>
        &#8592; Prev
      </button>
      <button className="next-button" onClick={nextSlide}>
        Next &#8594;
      </button>
    </div>
  );
};

export default Slider;
