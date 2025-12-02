import "../../styles/hero.styles.css";

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-container">
        <div className="hero-top-container">
          <div className="about-container gray-box">
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
  );
}
