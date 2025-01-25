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
            <form>
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email Address" />
                <textarea placeholder="Message"></textarea>
                <button type="submit">SEND</button>
            </form>
            </div>
            </section>
      <Footer />
    </div>
  )
}

export default Contact
