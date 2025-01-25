import Footer from "./Footer"
import NavBar from "./NavBar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      <NavBar />
      <div className="hero">
           <div className="box">
        <p> <Link to='/'>Home  </Link> 
            <FontAwesomeIcon icon={faArrowRight} className="setter-icon"/> 
            
            <span><Link to='/contact'>Contact</Link> </span></p>
                
         </div> 
      </div>
        
        <section className="contact">
            <div className="contact-container">
            <h2>CONTACT US</h2>
            <p className="contact-text">In one click, reach out to us for custom designs,complaint and recommendations, your sactifaction our concern</p>
            <form className="contact-form">
                <input type="text" placeholder="Full Name" autoFocus />
                <input type="email" placeholder="Email Address" />
                <textarea placeholder="Message" ></textarea>
                <button type="submit" className="contact-btn">SEND</button>
            </form>
            </div>
            </section>
      <Footer />
    </div>
  )
}

export default Contact
