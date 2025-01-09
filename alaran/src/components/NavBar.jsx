import  { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const NavBar = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // If user scrolls more than 50px, apply background color
        controls.start({
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          color: 'rgba(255, 255, 255, 1)', // White text
          transition: { duration: 0.5 },
        });
      } else {
        // Make navbar transparent
        controls.start({
          backgroundColor: 'rgba(0, 0, 0, 0)', // Transparent
          transition: { duration: 0.3 },
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <motion.nav
      initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }} // Initially transparent
      animate={controls}
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        padding: '1rem',
        zIndex: 1000,
      }}
    >
      <nav>
        <div className="logo">LOGO</div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="icons">
            <i className="fas fa-search"></i>
            <i className="fas fa-bars"></i>
        </div>
      </nav>
    </motion.nav>
  );
};

export default NavBar;
