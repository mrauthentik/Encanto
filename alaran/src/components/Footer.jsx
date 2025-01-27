import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import logo from '../assets/alaran log2.png'

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="footer-container">
        {/* Section 1 */}
        <motion.div
          className="footer-section"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
         <img src={logo} alt="Brand logo" className="footer-logo" />
        </motion.div>

        {/* Section 2 */}
        <motion.div
          className="footer-section"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h6>Quick Links</h6>
          <p><Link to='/brand'>Our Brand</Link> </p>
          <p> <Link to='/design'>Our Designs</Link></p>
          <p>Send Measurement</p>
          <p><Link to='/about'> About Us</Link></p>
          <p><Link to='/services'>Our Services</Link> </p>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          className="footer-section"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h6>Reach Us</h6>
          <p> <Link to='/contact'>Contact</Link>  </p>
          <p>
            E-mail: <a href="mailto:alaranafrica@gmail.com">alaranafrica@gmail.com</a>
          </p>
          <p> <Link to='/faqs'>FAQs</Link></p>
          <p>Our Location: <i>No 10, Old soldier Quarters, FCT Abuja.</i> </p>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          className="newsletter-section"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h6>Newsletter</h6>
          <p>Sign up and stay updated on our latest updates and offers</p>
          <form className="newsletter-input">
            <input
              type="email"
              placeholder="Email Address"
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button">
              SUBSCRIBE
            </button>
          </form>
        </motion.div>
      </div>

      {/* Social Media Icons */}
      <motion.div
        className="footer-icons"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
       <FontAwesomeIcon icon={faFacebook}  className="icon"/> 
        <FontAwesomeIcon icon={faWhatsapp} className="icon" />
        <Link to="https://www.instagram.com/alaranafrica/"><FontAwesomeIcon icon={faInstagram}className="icon" /></Link>
        <FontAwesomeIcon icon={faTwitter} className="icon" />
      </motion.div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        &copy; Copyright 2025 - <span> ALARAN AFRICA</span>
      </div>
    </motion.footer>
  );
};

export default Footer;
