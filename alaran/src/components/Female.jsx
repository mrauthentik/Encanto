import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import img1 from "../assets/design.jpg";
import img2 from "../assets/design (1).jpg";
import img3 from "../assets/design (2).jpg";
import img4 from "../assets/fashion (4).jpg";

const images = [img1, img2, img3, img4, img1, img2, img3, img4]; // Add more images

const Female = () => {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef(null);

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Handle touch swipe
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      nextSlide();
    } else if (touchEndX - touchStartX > 50) {
      prevSlide();
    }
  };

  return (
    <section className="female-section">
      <h1 className="title">ALARAN Designs</h1>

      {/* Image Slider */}
      <div
        className="carousel-container"
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt="Fashion Design"
            className="carousel-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button className="nav-button left" onClick={prevSlide}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button className="nav-button right" onClick={nextSlide}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>

      <h2> The World can only Imagine</h2>

      {/* Image Grid with Horizontal Scroll */}
      <div className="image-grid-wrapper">
        <div className="image-grid">
          {images.slice(0, 3).map((image, i) => (
            <div key={i}>
              <img src={image} alt={`Design ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Female;
