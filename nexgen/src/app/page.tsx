import { headerButtons } from "@/common/data/header-buttons";
import { reasons } from "@/common/data/reasons";
import { services } from "@/common/data/services";

export default function Home() {
  return (
    <div>
      <header>
        <div className="header-logo-container">
          <img alt="NexGen Logo." src="./images/nexgen.png" />
        </div>
        <div className="header-buttons-container">
          {headerButtons.map((text) => {
            return (
              <div key={text} className="header-button roboto-mono">
                {text.toUpperCase()}
              </div>
            );
          })}
        </div>
      </header>
      <main>
        <section id="hero">
          <div className="hero-container">
            <div className="hero-top-container">
              <div className="about-container">
                <div className="about-headers-container">
                  {/* TODO: fiddle around with the svg */}
                  <h1 className="about-header">
                    DIGITAL SOLUTIONS <svg />
                  </h1>
                  <h1 className="about-header">THAT DRIVE SUCCESS</h1>
                  <p className="about-subheading">
                    At NexGen, we believe in the transformative power of digital
                    solutions. Our team of experts is dedicated to helping
                    businesses like yours thrive in the fast-paced digital
                    landscape.
                  </p>
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
              </div>
              <div className="featured-product">
                <div className="image-container">
                  {/* TODO: implement svg */}
                  <svg />
                  <img
                    alt="Example of the Estatein Real Estate web design."
                    src="./images/featured.png"
                  />
                </div>
                <div className="featured-product-description">
                  <h3>Estatein Real Estate</h3>
                  <p>Web Development. </p>
                </div>
              </div>
            </div>
            <div className="hero-bottom">
              <div className="achievement">
                <p className="achievement-heading roboto-mono">CLIENTS</p>
                <p className="achievement-amount">200+</p>
              </div>
              <div className="achievement">
                <p className="achievement-heading roboto-mono">PROJECTS</p>
                <p className="achievement-amount">280+</p>
              </div>
              <div className="achievement">
                <p className="achievement-heading roboto-mono">HAPPY CLIENTS</p>
                <p className="achievement-amount">100%</p>
              </div>
              <div className="achievement">
                <p className="achievement-heading roboto-mono">FOLLOWER</p>
                <p className="achievement-amount">420K</p>
              </div>
              <div className="achievement">
                <p className="achievement-heading roboto-mono">
                  Years of Experience
                </p>
                <p className="achievement-amount">10+</p>
              </div>
              <div>
                <div className="open-button-container">
                  <img alt="Open button." src="./images/top-right-arrow.png" />
                </div>
                <p
                  className="achievement-heading roboto-mono"
                  style={{ fontSize: "20px" }}
                >
                  KNOW MORE
                </p>
              </div>
            </div>
          </div>
        </section>
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
        <section id="projects"></section>
        <section id="testimonials"></section>
        <section id="faq"></section>
        <section id="contact"></section>
      </main>
    </div>
  );
}
