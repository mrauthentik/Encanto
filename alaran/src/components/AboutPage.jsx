
import NavBar from "./NavBar";
import Landing from "./Landing";
import About from "./About";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";


const teamMembers = [
  {
    name: "Jane Doe",
    role: "Lead Designer",
    img: "path/to/image1.jpg",
    socials: {
      facebook: "https://facebook.com/janedoe",
      instagram: "https://instagram.com/janedoe",
      twitter: "https://twitter.com/janedoe",
    },
  },
  {
    name: "John Smith",
    role: "Business Strategist",
    img: "path/to/image2.jpg",
    socials: {
      facebook: "https://facebook.com/johnsmith",
      instagram: "https://instagram.com/johnsmith",
      twitter: "https://twitter.com/johnsmith",
    },
  },
  // Add more team members as needed
];

const AboutPage = () => {
  return (
    <div>
      <NavBar />
      <Landing />
      <About />
      <section className="about-section">
        <main>
          <h2>THE ALARAN PROJECT</h2>
          <p>
            Our journey began as we decided to pay attention to the Nigeria textile markets,
            providing several indigenously made fabric designs that can compete in the global
            market.
            <br />
            The Alaran project aims to create outstanding luxury clothing designs that give you
            confidence and promote African culture, making you stand out anywhere and everywhere
            in the world.
          </p>

          <h2>OUR TEAM</h2>
          <div className="team-slider">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="team-card"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src={member.img} alt={`${member.name}`} className="team-image" />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <div className="team-socials">
                  <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </main>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;
