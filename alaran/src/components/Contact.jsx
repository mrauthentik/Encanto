import Footer from "./Footer"


const Contact = () => {
  return (
    <div>
        <section className="contact">
            <div className="contact-container">
            <h2>Contact Us</h2>
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
