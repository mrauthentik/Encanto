// Code for the About Page
import NavBar from './NavBar'
import Landing from './Landing'
import About from './About'

const AboutPage = ({text}) => {
  return (
    <div>
      <NavBar />
      <Landing />
        <About />
      <h1>Welcome to About us Page {text}</h1>
    </div>
  )
}

export default AboutPage
