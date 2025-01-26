import Footer from "./Footer";
import NavBar from "./NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Contact = () => {
  const iframeVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const formVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.5 } },
  };

  return (
    <div>
      <NavBar />
      <motion.div
        className="hero"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="box">
          <p>
            <Link to="/">Home</Link>
            <FontAwesomeIcon icon={faArrowRight} className="setter-icon" />
            <span>
              <Link to="/contact">Contact</Link>
            </span>
          </p>
        </div>
      </motion.div>
      <main>
        {/* Animated iframe */}
        <motion.iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d504009.81876169617!2d6.7690487890625!3d9.282060000000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104ddd1171bf298b%3A0x240f035438cf6898!2sOld%20Soldiers%20Quarters%2C%20Sabon-Gari%20Extension%20Bwari%20Abuja.!5e0!3m2!1sen!2sng!4v1737881409237!5m2!1sen!2sng"
          width="100%"
          height="450"
          className="iframe"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
          variants={iframeVariants}
          initial="initial"
          animate="animate"
        ></motion.iframe>
      </main>
      <section className="contact">
        <motion.div
          className="contact-container"
          variants={formVariants}
          initial="initial"
          animate="animate"
        >
          <h2>CONTACT US</h2>
          <p className="contact-text">
            In one click, reach out to us for custom designs, complaints, and
            recommendations. Your satisfaction is our concern.
          </p>
          <form className="contact-form">
            <input type="text" placeholder="Full Name" autoFocus />
            <input type="email" placeholder="Email Address" />
            <textarea placeholder="Message"></textarea>
            <button type="submit" className="contact-btn">
              SEND
            </button>
          </form>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
