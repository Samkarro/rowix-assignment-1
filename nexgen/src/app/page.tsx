import { socials } from "@/common/data/socials";
import NexGenHeader from "@/common/elements/header";
import NewsletterForm from "@/common/elements/newsletter-form";
import QuestionForm from "@/common/elements/question-form";
import QuestionList from "@/common/elements/question-list";
import Hero from "@/common/elements/sections/hero.section";
import Projects from "@/common/elements/sections/projects.section";
import Reasons from "@/common/elements/sections/reasons.section";
import Services from "@/common/elements/sections/services.section";
import Testimonials from "@/common/elements/sections/testimonials";

export default function Home() {
  return (
    <div>
      <NexGenHeader />
      <main>
        <Hero />
        <Reasons />
        <Services />
        <Projects />
        <Testimonials />
        <section id="faq">
          <div className="faq-heading-container">
            <h2>FREQUENTLY ASKED QUESTIONS</h2>
            {/* TODO: make this a module */}
            <div className="upper-service-right">
              <div className="open-button-container">
                <img alt="Open button." src="./images/top-right-arrow.png" />
              </div>
              <p
                className="achievement-heading roboto-mono"
                style={{ fontSize: "20px" }}
              >
                DETAILS
              </p>
            </div>
          </div>
          <div className="faq-bottom">
            <QuestionList />
            <QuestionForm />
          </div>
        </section>
        <section id="contact">
          <div className="cta-section-container">
            <p className="cta-section-heading">
              READY TO TRANSFORM YOUR DIGITAL PRESENCE?
            </p>
            <div className="cta-section-lower">
              <p className="cta-section-subheading">
                Take the first step towards digital success with NexGen by your
                side. Our team of experts is eager to craft tailored solutions
                that drive growth for your business.
              </p>
              <div className="cta">
                <p className="final-cta-text">GET IN TOUCH</p>
                <img src="./images/top-right-arrow.png" />
              </div>
            </div>
          </div>
          {/* TODO: implement scrolling banner */}
          <div className="scrolling-banner">
            <svg
              width="7"
              height="7"
              viewBox="0 0 7 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="3.5" cy="3.5" r="3.5" fill="#CE7D63" />
            </svg>
          </div>
          <div className="major-navigation-container">
            <div className="socials-container">
              {socials.map((medium) => {
                return (
                  <div className="social-medium-card">
                    <div className="medium-top">
                      <div className="medium-image-container">
                        <img src={medium.image} />
                      </div>
                      {/* TODO: make this a module */}
                      <div className="upper-service-right">
                        <div className="open-button-container">
                          <img
                            alt="Open button."
                            src="./images/top-right-arrow.png"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="social-medium-card-text">
                      <h3>{medium.title}</h3>
                      <p>{medium.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="nav-and-copyright">
              {/* make this a module */}
              <nav>
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
                      Developmment<div className="soon-label">Soon</div>
                    </a>
                  </div>
                </div>
              </nav>
              <div className="newsletter-container">
                <div className="newsletter-cta-text-container">
                  <p className="newsletter-subheading">Newsletter</p>
                  <h3>Subscribe to our newsletter</h3>
                  <NewsletterForm />
                </div>
              </div>
              <div className="copyright roboto-mono">
                <p>© 2024 NextGen. All rights reserved.</p>
                <div className="copyright-buttons">
                  <a>Terms & Conditions</a>
                  <a>Privacy Policy</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
