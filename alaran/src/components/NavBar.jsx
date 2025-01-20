import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faSearch, faCartShopping, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from '../assets/alaran log2.png';
// import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      animate={{
        backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.9)" : "rgba(0, 0, 0, 0)",
      }}
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        padding: "1rem",
        zIndex: 1000,
        transition: "background-color 0.3s ease",
      }}
    >
      <div className="navbar-container">
        <div className="logo">
          <a href="#">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <div className="nav-text">ALARAN AFRICA</div>

        {/* Desktop Navigation */}
        <ul className="nav-items desktop-nav">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>

        {/* Desktop Icons */}
        <div className="icons">
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faSearch} />
          <FontAwesomeIcon icon={faCartShopping} />
        </div>

        {/* Mobile Menu Icon */}
        <FontAwesomeIcon
          icon={isMobileMenuOpen ? faTimes : faBars}
          className="menu-icon"
          onClick={toggleMobileMenu}
        />

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.ul
              className="nav-items mobile-nav open"
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            >
              <li onClick={toggleMobileMenu}>Home</li>
              <a href="./AboutPage.jsx"><li onClick={toggleMobileMenu}>About</li></a> 
              <li onClick={toggleMobileMenu}>Services</li>
              <li onClick={toggleMobileMenu}>Contact</li>

              {/* Mobile Icons */}
              <div className="icons mobile-icons">
                <FontAwesomeIcon icon={faHeart} />
                <FontAwesomeIcon icon={faSearch} />
                <FontAwesomeIcon icon={faCartShopping} />
              </div>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default NavBar;
