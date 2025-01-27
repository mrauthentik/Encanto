import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faSearch, faCartShopping, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from '../assets/alaran log2.png';
import { Link } from 'react-router-dom';

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
        backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.9)" : "rgba(0, 0, 0, 0.68)",
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
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link> </li>
          <li><Link to='/services'>Services</Link> </li>
          <li> <Link to='/contact'>Contact</Link></li>
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
          className="menu-icon toggle"
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
              <li onClick={toggleMobileMenu}> <Link to='/'>  Home</Link></li>
              <li onClick={toggleMobileMenu}><Link to='/about'>About</Link> </li>
              <li onClick={toggleMobileMenu}><Link to='/services'>Services</Link> </li>
              <li onClick={toggleMobileMenu}><Link to='/contact'>Contact</Link> </li>

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
