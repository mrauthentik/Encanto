import Footer from "./Footer";
import NavBar from "./NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faClockRotateLeft, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Setter from "./Setter";
import barcode from "../assets/barcode.jpeg";

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
     <Setter set={'Contact'} where={'/contact'}/>
      <main>
      <h2>CONTACT US</h2>
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
             <div className="contact-blocks">
              <div className="contact-block">
                  <FontAwesomeIcon icon={faLocationDot} className="contact-icon" />
                  <h5> Our Location</h5>
                   <p>We are located at No 10, Old soldier Quarters, FCT Abuja.</p>
              </div>
              
              <div className="contact-block">
                  <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                  <h5> Contact Info</h5>
                   <p> 
                    <a href="mailto:alaranafrica@gmail.com">Email: alaranafrica@gmail.com</a>
                   <br /> <a href="tel:+234 806 661 8494">Telephone: +234 806 661 8494 </a>
                    </p>
              </div>
              
              <div className="contact-block">
                  <FontAwesomeIcon icon={faClockRotateLeft} className="contact-icon" />
                  <h5> Business Hours</h5>
                   <p>Monday - Saturday: <br />
                   09:00 am - 20:00 pm.</p>
              </div>
              
             </div>
          
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
          <h6 className="barcode-title"> Scan to message on Whatsapp</h6>
           <img src={barcode} alt="" className="barcode" />
        </motion.div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
