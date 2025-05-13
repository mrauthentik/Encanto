import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";


const images = [
  "https://res.cloudinary.com/dnjfc8uhs/image/upload/v1747158720/img_12_hwo1uz.jpg",
  "https://res.cloudinary.com/dnjfc8uhs/image/upload/v1747158733/img_18_gbxlyn.jpg",
  "https://res.cloudinary.com/dnjfc8uhs/image/upload/v1747158721/img_1_yjvef1.jpg",
  "https://res.cloudinary.com/dnjfc8uhs/image/upload/v1747158723/img_10_hskhds.jpg",
  "https://res.cloudinary.com/dnjfc8uhs/image/upload/v1747158733/img_18_gbxlyn.jpg",
  "https://res.cloudinary.com/dnjfc8uhs/image/upload/v1747159018/img_dgspev.jpg",
];
const texts = [
  "About the Culture",
  "Style Meets Elegance",
  "Unleash Your Confidence",
  "See Africa, Feel Africa",
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
