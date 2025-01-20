// Code for the About Page
import NavBar from './NavBar'
import Landing from './Landing'
import About from './About'
import Footer from './Footer'

const AboutPage = () => {
  return (
    <div>
      <NavBar />
      <Landing />
        <About />
        <section className='about-section'>
             <main>
            <h2> THE ALARAN PROJECT</h2>
            <p>
            Our journey began as we decided to pay attention to the Nigeria textile markets, providing several indigenously made fabric designs that can compete in the global market. 
            <br />
            The Alaran project sees to create outstanding luxury clothing designs that give you the confidence and also promote the Africa culture, making you standout anywhere and everywhere in the world. We also intend to in the process, grow our country’s economic power as we join in the ‘buy Nigeria, grow Nigeria’ campaign as we also join to improve the Africa market at large.</p>
            <h2>OUR TEAM</h2>
            <p>We are a team of passionate Nigerians devoted to making a change in our generation, putting our knowledge and skills of fashion designing to help position the Africa fashion industry in the global market place. Our team includes outstanding fashion designers, business strategists, media/communication experts and so on. </p>
        </main>
        </section>
        
        <Footer />
    </div>
  )
}

export default AboutPage
