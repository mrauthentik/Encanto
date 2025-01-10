import  { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  // Refs for each section
  const aboutRef = useRef(null);
  const whyChooseUsRef = useRef(null);

  // InView Hooks for triggering animations
  const isAboutInView = useInView(aboutRef, { once: true, margin: '0px 0px -100px 0px' });
  const isWhyChooseUsInView = useInView(whyChooseUsRef, { once: true, margin: '0px 0px -100px 0px' });

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
            Alaran is a fashion brand that offers a wide range of clothing and accessories for
            Alaran Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque numquam debitis
            earum consequuntur magnam adipisci esse soluta deleniti? Reiciendis voluptatum temporibus
            unde suscipit. Dolorem error aliquam tenetur saepe reiciendis facilis!
          </p>
        </main>
      </motion.div>

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
            Alaran is a fashion brand that offers a wide range of clothing and accessories for
            Alaran Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque numquam debitis
            earum consequuntur magnam adipisci esse soluta deleniti? Reiciendis voluptatum temporibus
            unde suscipit. Dolorem error aliquam tenetur saepe reiciendis facilis!
          </p>
        </main>
      </motion.div>
    </section>
  );
};

export default About;
