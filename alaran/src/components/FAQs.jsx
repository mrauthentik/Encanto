import Footer from "./Footer"
import NavBar from "./NavBar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const FAQs = () => {
  return (
    <div>
       <NavBar />
       <main>
        <div className="hero">
             <div className="box">
            <p><Link to='/'> Home </Link>
                <FontAwesomeIcon icon={faArrowRight} className="setter-icon"/> 
                
                <span> <Link to='/faqs' ></Link>FAQs</span></p>
           
         </div>
        </div>
       </main>
       <section>
        <h2>FREQUENTLY ASK QUESTIONS</h2>
        <p className="contact-text">Feel free to ask us questions on our products, brand and designs. <br />
         Our Customer service will get in touch with you in time. <br />
         Our Services are piorly yours, your satisfaction our concern
        </p>
        <section className="contact">
            <div className="contact-container">
            <form className="contact-form">
                <input type="text" placeholder="Full Name" autoFocus />
                <input type="email" placeholder="Email Address" />
                <textarea placeholder="Your Question?" ></textarea>
                <button type="submit" className="contact-btn">SEND</button>
            </form>
            </div>
            </section>
       </section>
        
       <Footer />
    </div>
  )
}

export default FAQs
