import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faSearch, faCartShopping, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from '../assets/alaran log2.png';
import { Link } from 'react-router-dom';

const NavBar = ({ setSearchQuery }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false); // Tracks if the search bar is active in mobile view

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchText(value);
    setSearchQuery(value); // Update the search query in the parent component
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
          <a href="#!">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <div className="nav-text">ALARAN AFRICA</div>

        {/* Desktop Navigation */}
        <ul className="nav-items desktop-nav">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/services'>Services</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>

        {/* Search Bar */}
        <div className="search-bar desktop-nav">
          <input
            type="text"
            value={searchText}
            onChange={handleSearch}
            placeholder="Search designs..."
            style={{ display: isSearchActive || window.innerWidth > 768 ? "block" : "none" }}
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="search-icon"
            onClick={() => setIsSearchActive((prev) => !prev)} // Toggle search bar visibility
          />
        </div>

        {/* Desktop Icons */}
        <div className="icons">
          <FontAwesomeIcon icon={faHeart} />
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
              <li onClick={toggleMobileMenu}><Link to='/'>Home</Link></li>
              <li onClick={toggleMobileMenu}><Link to='/about'>About</Link></li>
              <li onClick={toggleMobileMenu}><Link to='/services'>Services</Link></li>
              <li onClick={toggleMobileMenu}><Link to='/contact'>Contact</Link></li>

              {/* Mobile Icons */}
              <div className="icons mobile-icons">
                <FontAwesomeIcon icon={faHeart} />
                <FontAwesomeIcon icon={faCartShopping} />
                <div className="search-bar ">
                      <input
                        type="text"
                        value={searchText}
                        onChange={handleSearch}
                        placeholder="Search designs..."
                        style={{ display: isSearchActive || window.innerWidth > 768 ? "block" : "none" }}
                      />
                      <FontAwesomeIcon
                        icon={faSearch}
                        className="search-icon"
                        onClick={() => setIsSearchActive((prev) => !prev)} // Toggle search bar visibility
                      />
                </div>

              </div>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default NavBar;
