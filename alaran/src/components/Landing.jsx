import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import image1 from "../assets/fashion (1).jpg";
import image2 from "../assets/fashion (2).jpg";
import image3 from "../assets/fashion (3).jpg";
import image4 from "../assets/fashion (4).jpg";

const images = [image1, image2, image3, image4];
const texts = [
  "Fashion for the Bold",
  "Style Meets Elegance",
  "Unleash Your Confidence",
  "Timeless Trends, Endless Style",
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
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
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Slider;
