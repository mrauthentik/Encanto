
const Footer = () => {
  return (
    <div className="footer">
      <div className="view">
        <h6>Our Highlights</h6>
        <p>All Styles</p>
        <p>Ready to Deliver</p>
        <p>Preorder</p>
        <p>Get Measurement</p>
      </div>
      <div className="view">
        <h6>Quick Links</h6>
        <p>Our Brand</p>
        <p>Our Designs</p>
        <p>About Us</p>
        <p>Our Services</p>
      </div>
      <div className="view">
        <h6>Reach Us</h6>
        <p>Contact</p>
        <p>E-mail: <a href="mailto:info@alaran.africa">info@alaran.africa</a></p>
        <p>FAQs</p>
        <p>Our Location</p>
      </div>
      <div className="newsletter">
        <h6>Newsletter</h6>
        <p>Sign up and stay Updated on our lastest Upadates and offers</p>
        <form action="#">
            <input type="email" name="" id="" placeholder="Email Address" />
            <input type="submit" name="" id="" value="SUBSCRIBE" />
        </form>
      </div>
       <span>Copyright 2025 - Alaran Africa</span>
    </div>
  )
}

export default Footer
