import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import image1 from "../assets/fashion (1).jpg";
import image2 from "../assets/fashion (2).jpg";
import image3 from "../assets/fashion (3).jpg";
import image4 from "../assets/fashion (5).jpg";
import image5 from "../assets/fashion (6).jpg";
import image6 from "../assets/fashion (8).jpg";
import image7 from "../assets/img.jpg";

const images = [image7,image1, image2, image3, image4, image5,];
const texts = [
  "About the Culture",
  "Style Meets Elegance",
  "Unleash Your Confidence",
  "Timeless Trends, Endless Style",
  "Fashion for the Bold",
  "With the Beauty"
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Timer: Automatically switch slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider-container">
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          className="slider-wrapper"
          initial={{ opacity: 9, translateX: -600 }}
          animate={{ opacity: 5, translateX: 0 }}
          exit={{ opacity: 5, translateX: 1000, scale: 0.5 }}
          transition={{ duration: 2 }}
        >
          {/* Fullscreen Image */}
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="slider-image"
          />
          {/* Text Positioned at the Bottom */}
          <motion.div
            className="slider-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2>{texts[currentIndex]}</h2>
            <button className="home-btn">SHOP NOW</button>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Slider;
