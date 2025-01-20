import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

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
          <h6>Our Highlights</h6>
          <p>All Styles</p>
          <p>Ready to Deliver</p>
          <p>Preorder</p>
          <p>Get Measurement</p>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          className="footer-section"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h6>Quick Links</h6>
          <p>Our Brand</p>
          <p>Our Designs</p>
          <p>About Us</p>
          <p>Our Services</p>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          className="footer-section"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h6>Reach Us</h6>
          <p>Contact</p>
          <p>
            E-mail: <a href="mailto:alaranafrica@gmail.com">alaranafrica@gmail.com</a>
          </p>
          <p>FAQs</p>
          <p>Our Location:No 10, Old soldier quarters, FCT Abuja. </p>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          className="newsletter-section"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h6>Newsletter</h6>
          <p>Sign up and stay updated on our latest updates and offers</p>
          <form>
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
