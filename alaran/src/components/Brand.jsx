import Footer from './Footer';
import NavBar from './NavBar';
import Setter from './Setter';
import logo from '../assets/alaran logo3.png';
import img from '../assets/fashion (10).jpg';
import img1 from '../assets/design.jpg';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faArrowRight } from '@fortawesome/free-solid-svg-icons';

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
                    <img src={img} alt="" />
                    <img src={img1} alt="" className='brand-img1' />
                </div>

          <h2 className="text-2xl font-semibold mb-4 text-center">Our Identity</h2>
          <p className="text-gray-700 mb-4 text-justify">
            Alaran (Aláráń) is pronounced as <strong>&quot;Ala-run&quot;</strong>. The name reflects our core values and purpose.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <FontAwesomeIcon icon={faArrowRight} className="mr-3 text-primary" />
              <p>
                <strong>Alá- (prefix):</strong> Means &quot;to choose&quot; or &quot;selected.&quot;
              </p>
            </li>
            <li className="flex items-start">
              <FontAwesomeIcon icon={faArrowRight} className="mr-3 text-primary" />
              <p>
                <strong>ráń (root):</strong> Means &quot;to guide&quot; or &quot;leader.&quot;
              </p>
            </li>
          </ul>
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
                    <img src={img} alt="" />
                    <img src={img1} alt="" className='brand-img2' />
                </div>

          <h2 className="text-2xl font-semibold mb-4 text-center">Our Identity</h2>
          <p className="text-gray-700 mb-4 text-justify">
            Alaran (Aláráń) is pronounced as <strong>&quot;Ala-run&quot;</strong>. The name reflects our core values and purpose.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <FontAwesomeIcon icon={faArrowRight} className="mr-3 text-primary" />
              <p>
                <strong>Alá- (prefix):</strong> Means &quot;to choose&quot; or &quot;selected.&quot;
              </p>
            </li>
            <li className="flex items-start">
              <FontAwesomeIcon icon={faArrowRight} className="mr-3 text-primary" />
              <p>
                <strong>ráń (root):</strong> Means &quot;to guide&quot; or &quot;leader.&quot;
              </p>
            </li>
          </ul>
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
                    <img src={img} alt="" className='brand-img3' />
                    <img src={img1} alt=""  />
                </div>

          <h2 className="text-2xl font-semibold mb-4 text-center">Our Identity</h2>
          <p className="text-gray-700 mb-4 text-justify">
            Alaran (Aláráń) is pronounced as <strong>&quot;Ala-run&quot;</strong>. The name reflects our core values and purpose.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <FontAwesomeIcon icon={faArrowRight} className="mr-3 text-primary" />
              <p>
                <strong>Alá- (prefix):</strong> Means &quot;to choose&quot; or &quot;selected.&quot;
              </p>
            </li>
            <li className="flex items-start">
              <FontAwesomeIcon icon={faArrowRight} className="mr-3 text-primary" />
              <p>
                <strong>ráń (root):</strong> Means &quot;to guide&quot; or &quot;leader.&quot;
              </p>
            </li>
          </ul>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Brand;
