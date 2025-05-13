import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import img1 from "../assets/images/img (6).JPG";
import img2 from "../assets/images/img (8).PNG";
import img3 from "../assets/images/img (7).JPG";
import img4 from "../assets/images/img (10).JPG";


const images = [img1, img2, img3, img4, img1, img2, img3, img4]; // Add more images

const Female = () => {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef(null);

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
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
            initial={{ opacity: 1, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 1, x: -50 }}
            transition={{ duration: 0.2 }}
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

    
       
    </section>
  );
};

export default Female;
