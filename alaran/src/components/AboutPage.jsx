import NavBar from "./NavBar";
import Landing from "./Landing";
import About from "./About";
import Footer from "./Footer";
import { motion } from "framer-motion";
import TeamSlide from "./TeamSlide";
import Curved from "./Curved";



const AboutPage = () => {


  return (
    <div className="about-page"> 
      <NavBar />
      <Landing />
      <About />
      <Curved />
      <section className="about-section">
        <main>
          <motion.div>

          <h2>OUR TEAM</h2>
          <p>We are a team of passionate Nigerians devoted to making a change in our generation, putting our knowledge and skills of fashion designing to help position the Africa fashion industry in the global market place. Our team includes outstanding fashion designers, business strategists, media/communication experts and so on. </p>
          </motion.div>
          {/* <TeamSlide />  */}
          
        </main>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;
