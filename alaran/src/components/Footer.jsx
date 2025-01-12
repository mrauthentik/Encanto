const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h6>Our Highlights</h6>
            <p>All Styles</p>
            <p>Ready to Deliver</p>
            <p>Preorder</p>
            <p>Get Measurement</p>
          </div>
          <div className="footer-section">
            <h6>Quick Links</h6>
            <p>Our Brand</p>
            <p>Our Designs</p>
            <p>About Us</p>
            <p>Our Services</p>
          </div>
          <div className="footer-section">
            <h6>Reach Us</h6>
            <p>Contact</p>
            <p>
              E-mail: <a href="mailto:info@alaran.africa">info@alaran.africa</a>
            </p>
            <p>FAQs</p>
            <p>Our Location</p>
          </div>
          <div className="newsletter-section">
            <h6>Newsletter</h6>
            <p>Sign up and stay updated on our latest updates and offers</p>
            <form action="#">
              <input
                type="email"
                placeholder="Email Address"
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-button">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <span>  &copy; Copyright 2025 - Alaran Africa</span>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  