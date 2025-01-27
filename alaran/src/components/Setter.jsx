
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Setter = ({set,where}) => {
  return (
    <div>
        <motion.div
        className="setter-hero"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="box">
          <p>
            <Link to="/">Home</Link>
            <FontAwesomeIcon icon={faArrowRight} className="setter-icon" />
            <span>
              <Link to={where}>{set}</Link>
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default Setter
