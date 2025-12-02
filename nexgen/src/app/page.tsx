import { projects } from "@/common/data/projects";
import { reasons } from "@/common/data/reasons";
import { services } from "@/common/data/services";
import { socials } from "@/common/data/socials";
import { testimonials } from "@/common/data/testimonials";
import NexGenHeader from "@/common/elements/header";
import NewsletterForm from "@/common/elements/newsletter-form";
import QuestionForm from "@/common/elements/question-form";
import QuestionList from "@/common/elements/question-list";
import Hero from "@/common/elements/sections/hero.section";

export default function Home() {
  return (
    <div>
      <NexGenHeader />
      <main>
        <Hero />
        <section id="reasons">
          <div className="reasons-heading-container">
            <h2>REASONS TO CHOOSE NEXGEN FOR YOUR DIGITAL JOURNEY</h2>
          </div>
          <div className="reasons-container">
            {reasons.map((reason) => {
              return (
                <div className="reason">
                  <div className="reason-text">
                    <h3>{reason.heading}</h3>
                    <p>{reason.text}</p>
                  </div>
                  <div className="learn-more-container">
                    <div className="open-button-container">
                      <img
                        alt="Open button."
                        src="./images/top-right-arrow.png"
                      />
                    </div>
                    <p>Learn More</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section id="services">
          <div className="services-heading-container">
            <h2>OUR SERVICES</h2>
          </div>
          <div className="services-container">
            {services.map((service) => {
              return (
                <div className="service">
                  <div className="upper-area">
                    <div className="upper-service-left">
                      <div className="service-image-container">
                        <img src={service.image} />
                      </div>
                      <h3>{service.heading}</h3>
                    </div>
                    <div className="upper-service-right">
                      <div className="open-button-container">
                        <img
                          alt="Open button."
                          src="./images/top-right-arrow.png"
                        />
                      </div>
                      <p
                        className="achievement-heading roboto-mono"
                        style={{ fontSize: "20px" }}
                      >
                        BOOK A CALL
                      </p>
                    </div>
                  </div>
                  <p>{service.description}</p>
                  <p className="service-price">{service.startingPrice}</p>
                </div>
              );
            })}
          </div>
        </section>
        <section id="projects">
          <div className="projects-heading-container">
            <h2>OUR WORKS</h2>
            <div>
              <div className="open-button-container">
                <img alt="Open button." src="./images/top-right-arrow.png" />
              </div>
              <p
                className="achievement-heading roboto-mono"
                style={{ fontSize: "20px" }}
              >
                BOOK A CALL
              </p>
            </div>
          </div>
          {projects.map((project) => {
            return (
              <div className="project">
                <div className="project-left">
                  <div className="project-top">
                    <div className="service-image-container">
                      <img src={project.image} />
                    </div>
                    <h3>{project.title}</h3>
                    <div className="upper-service-right">
                      <div className="open-button-container">
                        <img
                          alt="Open button."
                          src="./images/top-right-arrow.png"
                        />
                      </div>
                      <p
                        className="achievement-heading roboto-mono"
                        style={{ fontSize: "20px" }}
                      >
                        DETAILS
                      </p>
                    </div>
                  </div>
                  <div className="tags-container">
                    <div className="project-tag">
                      <p className="tag-name">Category</p>
                      <p className="tag-title">{project.category}</p>
                    </div>
                    <div className="project-tag">
                      <p className="tag-name">Time Taken</p>
                      <p className="tag-title">{project.timeTaken}</p>
                    </div>
                  </div>
                  <p className="project-description">{project.description}</p>
                </div>
                <div className="project-center">
                  <img src={project.image} />
                </div>
                <div className="project-right">
                  <div className="tech-container">
                    <h4>TECHNOLOGIES USED</h4>
                    <div className="tech-tags">
                      {project.tech.map((techItem) => {
                        return <p>{techItem}</p>;
                      })}
                    </div>
                  </div>
                  <div className="team-member-container">
                    <h4>TEAM MEMBERS</h4>
                    <div className="team-box">
                      {project.team.map((member) => {
                        return (
                          <div className="team-member">
                            <img src={member} />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="CTA">
                    <p>BOOK A CALL</p>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
        <section id="testimonials">
          <div className="testimonials-heading-container">
            <h2>TESTIMONIALS</h2>
            <div className="upper-service-right">
              <div className="open-button-container">
                <img alt="Open button." src="./images/top-right-arrow.png" />
              </div>
              <p
                className="achievement-heading roboto-mono"
                style={{ fontSize: "20px" }}
              >
                ALL TESTIMONIALS
              </p>
            </div>
          </div>
          <div className="testimonials-container">
            {testimonials.map((testimonial) => {
              return (
                <div className="testimonial">
                  <div className="testimonial-top">
                    <h4>{testimonial?.title}</h4>
                    <p>{testimonial?.body}</p>
                  </div>
                  <div className="testimonial-bottom">
                    <div>
                      <div className="testimonial-image-container">
                        <img src={testimonial?.author.image} />
                      </div>
                      <div className="testimonial-author-info">
                        <p className="testimonial-author-name">
                          {testimonial?.author.name}
                        </p>
                        <p className="testimonial-author-position">
                          {testimonial?.author.position}
                        </p>
                      </div>
                    </div>
                    <div className="open-button-container">
                      <img alt="Open button." src="./images/right-arrow.png" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
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
