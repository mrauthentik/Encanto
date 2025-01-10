import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faSearch, faCartPlus } from '@fortawesome/free-brands-svg-icons'

const NavBar = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        controls.start({
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          currentColor: 'rgba(255, 255, 255, 1)', // White text
          transition: { duration: 0.5 },
        });
      } else {
        controls.start({
          backgroundColor: 'rgba(0, 0, 0, 0)',
          transition: { duration: 0.3 },
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <motion.nav
      initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
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
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faSearch} />
          <FontAwesomeIcon icon={faCartPlus} />
        </div>
      </nav>
    </motion.nav>
  );
};

export default NavBar;
