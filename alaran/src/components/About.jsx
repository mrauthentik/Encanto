import  { useRef } from 'react';
// import PropTypes from 'prop-types';
import { motion, useInView } from 'framer-motion';

const About = () => {
  // Refs for each section
  const aboutRef = useRef(null);
  // const whyChooseUsRef = useRef(null);

  // InView Hooks for triggering animations
  const isAboutInView = useInView(aboutRef, { 
    once: true, 
    margin: '0px 0px -100px 0px' 
  }
);
  // const isWhyChooseUsInView = useInView(whyChooseUsRef, { once: true, margin: '0px 0px -100px 0px' });

  return (
    <section className="about-section">
      {/* About Us Section */}
      <motion.div
        ref={aboutRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isAboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className="about-title">About Us</h2>
        <main>
          <p>
          At Alaran, we proudly celebrate the richness and diversity of African cultural heritage. We believe that our unique cultural identity holds immense potential for global recognition and economic growth in the 21st century. Our mission is to showcase the authenticity and beauty of African fashion on the world stage, highlighting the vibrant textiles and indigenous print fabrics that set us apart.

Through our efforts, we aim to promote the African textile market, support local designers, and provide a platform for the global appreciation of African fashion. Our goal is to empower individuals to embrace their cultural heritage with confidence and style, making a statement wherever they go.
          </p>
        </main>
      </motion.div>

      {/* Why Choose Us Section */}
      {/* <motion.div
        ref={whyChooseUsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isWhyChooseUsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      >
        <h2 className="why-choose-us">Why Choose Us Now</h2>
        <main>
          <p>
            
              {chooseText} <br />
               {secondAboutText}
          </p>
        </main>
      </motion.div> */}
    </section>
  );
};
// About.propTypes = {
//   chooseText: PropTypes.string,
//   secondAboutText: PropTypes.string
// };


export default About;
