import NewsletterForm from "./newsletter-form";
import "../styles/nav.styles.css";

export default function NexGenNav() {
  return (
    <div className="nav-and-copyright">
      <nav className="gray-box">
        <div className="nav-column">
          <p className="roboto-mono">Home</p>
          <div className="nav-button-list">
            <a href="#reasons">Why Us</a>
            <a href="#hero">About Us</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#faq">FAQ's</a>
          </div>
        </div>
        <div className="nav-column">
          <p className="roboto-mono">Services</p>
          <div className="nav-button-list">
            <a href="#services">Web Development</a>
            <a href="#services">App Development</a>
            <a href="#services">Web Design</a>
            <a href="#services">Digital Marketing</a>
          </div>
        </div>
        <div className="nav-column">
          <p className="roboto-mono">Projects</p>
          <div className="nav-button-list">
            <a>Klothink</a>
            <a>Zenith</a>
            <a>Novus</a>
            <a>Apex</a>
          </div>
        </div>
        <div className="nav-column">
          <p className="roboto-mono">Blogs</p>
          <div className="nav-button-list">
            <a>Business</a>
            <a>
              Design<div className="soon-label">Soon</div>
            </a>
            <a>
              Developmment<div className="soon-label roboto-mono">Soon</div>
            </a>
          </div>
        </div>
      </nav>
      <div className="newsletter-container gray-box">
        <div className="newsletter-cta-text-container">
          <p className="newsletter-subheading roboto-mono">Newsletter</p>
          <h3>Subscribe to our newsletter</h3>
        </div>
        <NewsletterForm />
      </div>
      <div className="copyright roboto-mono gray-box">
        <p className="copyright-text">© 2024 NextGen. All rights reserved.</p>
        <div className="copyright-buttons">
          <a>Terms & Conditions</a>
          <svg
            width="1"
            height="27"
            viewBox="0 0 1 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.5"
              y1="2.18557e-08"
              x2="0.499999"
              y2="27"
              stroke="#232329"
            />
          </svg>

          <a>Privacy Policy</a>
        </div>
      </div>
    </div>
  );
}
