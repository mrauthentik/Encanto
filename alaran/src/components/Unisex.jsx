import image1 from "../assets/fashion (9).jpg";
import image2 from "../assets/fashion (12).jpg";
import alaran from "../assets/alaran logo3.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Unisex = () => {
  // Framer Motion Variants for animations
  const imageVariants = {
    hidden: { opacity: 0, y: 50 }, // Start off-screen
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }, // Slide into view
    exit: { opacity: 0, y: -50, transition: { duration: 0.6 } }, // Slide out of view
  };

  // Intersection observer hooks to detect when sections are in view
  const [ref1, inView1] = useInView({ threshold: 0.2 });
  const [ref2, inView2] = useInView({ threshold: 0.2 });

  return (
    <div>
      <main className="unisex">
        <div className="unisex-container">
          <div className="side">
            <img src={alaran} alt="Alaran Logo" />
          </div>

          <div className="unisex-images">
            {/* Animated Image 1 */}
            <motion.img
              src={image1}
              alt="Unisex Fashion 1"
              className="unisex-img1"
              ref={ref1}
              initial="hidden"
              animate={inView1 ? "visible" : "hidden"}
              exit="exit"
              variants={imageVariants}
            />

            {/* Animated Image 2 */}
            <motion.img
              src={image2}
              alt="Unisex Fashion 2"
              className="unisex-img2"
              ref={ref2}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              exit="exit"
              variants={imageVariants}
            />
          </div>

          <section>
            {/* Add any additional content or animations here */}
          </section>
        </div>
      </main>
    </div>
  );
};

export default Unisex;
