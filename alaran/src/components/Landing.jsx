import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import image1 from "../assets/images/img (12).JPG";
import image2 from "../assets/images/img (18).JPG";
import image3 from "../assets/images/img (1).PNG";
import image4 from "../assets/images/img (10).JPG";
import image5 from "../assets/images/img (18).JPG";
import image7 from "../assets/img.JPG";

const images = [image7, image1, image2, image3, image4, image5];
const texts = [
  "About the Culture",
  "Style Meets Elegance",
  "Unleash Your Confidence",
  "Timeless Trends, Endless Style",
  "Fashion for the Bold",
  "With the Beauty",
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
        {images.map((image, index) => (
          index === currentIndex && (
            <motion.div
              key={index}
              className="slider-wrapper"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0.9, x: "-100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              {/* Fullscreen Image */}
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="slider-image"
              />
              {/* Text Positioned at the Bottom */}
              <motion.div
                className="slider-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <h2>{texts[index]}</h2>
                <button className="home-btn"><Link to='/design'> SHOP NOW</Link></button>
              </motion.div>
            </motion.div>
          )
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Slider;
