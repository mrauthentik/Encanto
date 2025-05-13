import Footer from './Footer';
import NavBar from './NavBar';
import Setter from './Setter';
import logo from '../assets/alaran logo3.png';
// import img from '../assets/fashion (10).jpg';
import img1 from '../assets/design.jpg';
import img2 from '../assets/design (1).jpg';
// import img3 from '../assets/demola.PNG';
import img4 from '../assets/fashion (4).jpg';
import img5 from '../assets/fashion (3).jpg';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Brand = () => {
  return (
    <div>
      <NavBar />
      <Setter set={'Our Brand'} where={'/brand'} />

      {/* Hero Section */}
      <section className="hero-section">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-content"
        >
          <img src={logo} alt="Alaran logo" className="brand-logo mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-2">Our Brand</h1>
          <p className="text-lg">
            <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
            Selected. Guided. Inspired.
          </p>
        </motion.div>
      </section>

      {/* Brand Details Section */}
      <section className="brand-details px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="brand-breakdown max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6"
        >
                <div className="brand-img-slide">
                    <img src={img1} alt="" />
                    <img src={img1} alt="" className='brand-img1' />
                </div>

          <h2 className="text-2xl  mb-4 text-center">OUR IDENTITY</h2>
          <p className="text-gray-700 mb-4 text-justify">
            The name is originated from the word &quot; Aran &quot; which is a Yoruba name for a specific fabric type known as <strong>VELVET </strong>, in the Yoruba Culture &quot;Aran &quot; symbolizes Luxury, Elegance and Royalty.
            <br /> The name reflects our core values and purpose in promoting the Africa fashion on the global stage. <br /> 
          </p>
        </motion.div>
      </section>
      <section className="brand-details px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="brand-breakdown max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6"
        >
                <div className="brand-img-slide">
                    <img src={img4} alt="" />
                    <img src={img5} alt="" className='brand-img2' />
                </div>

          <h2 className="text-2xl  mb-4 text-center">OUR VISION</h2>
          <p className="text-gray-700 mb-4 text-center ml-8 text-justify ">
           Our Vision is to promote the Africa fashion on the global stage
          </p>
        </motion.div>
      </section>
      <section className="brand-details px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="brand-breakdown max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6"
        >
                <div className="brand-img-slide">
                <div className="brand-img-slide">
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/3hr2I5DdK6M"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg shadow-lg"
                  ></iframe>
                </div>

                </div>

          <h2 className="text-2xl  mb-4 text-center">MILESTONE</h2>
          <p className="text-gray-700 mb-4 text-justify">
            Our CEO made it to the show on the Weekends Deal show on NTA Abuja, where he spoke intensively on the Africa Fashion      </p>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Brand;
