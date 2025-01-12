import { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faSearch, faCartShopping, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from '../assets/alaran log2.png';

const NavBar = () => {
  const controls = useAnimation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        controls.start({
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          color: "rgba(255, 255, 255, 1)",
          transition: { duration: 0.5 },
        });
      } else {
        controls.start({
          backgroundColor: "rgba(0, 0, 0, 0)",
          transition: { duration: 0.3 },
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <motion.nav
      initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
      animate={controls}
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        padding: "1rem",
        zIndex: 1000,
      }}
    >
      <div className="navbar-container">
        <div className="logo">
          <a href="#">
            <img src={logo} alt="" className="logo" />
          </a>
        </div>
        <div className="nav-text">ALARAN AFRICA</div>

        {/* Desktop Navigation */}
        <ul className="nav-items desktop-nav">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        {/* Mobile Menu Icon */}
        <FontAwesomeIcon
          icon={isMobileMenuOpen ? faTimes : faBars}
          className="menu-icon"
          onClick={toggleMobileMenu}
        />

        {/* Mobile Navigation (Framer Motion) */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.ul
              className={`nav-items mobile-nav ${isMobileMenuOpen ? "open" : ""}`}
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            >
              <li onClick={toggleMobileMenu}>Home</li>
              <li onClick={toggleMobileMenu}>About</li>
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
