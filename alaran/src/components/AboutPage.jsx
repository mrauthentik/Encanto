import  { useState } from "react";
import NavBar from "./NavBar";
import Landing from "./Landing";
import About from "./About";
import Footer from "./Footer";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import img1 from "../assets/demola.PNG";
import img2 from "../assets/img.JPG";


const teamMembers = [
  {
    name: "Jane Doe",
    role: "Lead Designer",
    img: img1, // Corrected import
    socials: {
      facebook: "https://facebook.com/janedoe",
      instagram: "https://instagram.com/janedoe",
      twitter: "https://twitter.com/janedoe",
    },
  },
  {
    name: "John Smith",
    role: "Business Strategist",
    img: img2, // Corrected import
    socials: {
      facebook: "https://facebook.com/johnsmith",
      instagram: "https://instagram.com/johnsmith",
      twitter: "https://twitter.com/johnsmith",
    },
  },
  {
    name: "Umoke Uchenna",
    role: "Developer",
    img: img1,
    socials: {
      facebook: "https://facebook.com/johnsmith",
      instagram: "https://instagram.com/johnsmith",
      twitter: "https://twitter.com/johnsmith",
    },
  },
  {
    name: "Smith Adeola",
    role: "Brand Designer",
    img: img2,
    socials: {
      facebook: "https://facebook.com/johnsmith",
      instagram: "https://instagram.com/johnsmith",
      twitter: "https://twitter.com/johnsmith",
    },
  },
  {
    name: "Femi Ola",
    role: "Brand Designer",
    img: img1,
    socials: {
      facebook: "https://facebook.com/johnsmith",
      instagram: "https://instagram.com/johnsmith",
      twitter: "https://twitter.com/johnsmith",
    },
  },
];

const AboutPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <NavBar />
      <Landing />
      <About />
      <section className="about-section">
        <main>
          <h2>OUR TEAM</h2>
          <p>We are a team of passionate Nigerians devoted to making a change in our generation, putting our knowledge and skills of fashion designing to help position the Africa fashion industry in the global market place. Our team includes outstanding fashion designers, business strategists, media/communication experts and so on. </p>
          <div className="slider-wrapper">
            <button className="nav-button prev" onClick={handlePrev}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div className="slider">
              <AnimatePresence>
                <motion.div
                  key={currentIndex}
                  className="team-card"
                  initial={{ x: 300, opacity: 0, marginBottom: 50, backgroundColor: "black", color: "white" }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0, marginLeft: "50rem" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <img
                    src={teamMembers[currentIndex].img}
                    alt={teamMembers[currentIndex].name}
                    className="team-image"
                  />
                  <h3>{teamMembers[currentIndex].name}</h3>
                  <p className="role">{teamMembers[currentIndex].role}</p>
                  <div className="team-socials">
                    <a
                      href={teamMembers[currentIndex].socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a
                      href={teamMembers[currentIndex].socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a
                      href={teamMembers[currentIndex].socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            <button className="nav-button next" onClick={handleNext}>
              <FontAwesomeIcon icon={faChevronRight}  />
            </button>
          </div>
        </main>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;
