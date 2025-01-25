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
        <h2>Frequently Ask Questions</h2>
       </section>
        
       <Footer />
    </div>
  )
}

export default FAQs
