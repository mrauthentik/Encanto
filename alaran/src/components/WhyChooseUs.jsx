import  { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const WhyChooseUs = (props) => {
  // Refs for each section
  const aboutRef = useRef(null);
  const whyChooseUsRef = useRef(null);

  // InView Hooks for triggering animations
  const isWhyChooseUsInView = useInView(whyChooseUsRef, { once: true, margin: '0px 0px -100px 0px' });

  return (
    <section className="about-section">

      {/* Why Choose Us Section */}
      <motion.div
        ref={whyChooseUsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isWhyChooseUsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      >
        <h2 className="why-choose-us">Why Choose Us</h2>
        <main>
          <p>
              {props.text} <br />
          </p>
        </main>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
