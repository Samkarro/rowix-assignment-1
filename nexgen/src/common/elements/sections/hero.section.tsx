import OpenCircle from "../../../../public/svg/open-circle";
import OpenCircleForImage from "../../../../public/svg/open-circle-for-image";
import "../../styles/hero.styles.css";
import InfiniteScroll from "../infinite-scroll";
import OpenButton from "../open-button";

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-container">
        <div className="hero-top-container">
          <div className="about-container gray-box">
            <div className="about-headings-container">
              {/* TODO: fiddle around with the svg */}
              <h1 className="about-heading">
                DIGITAL SOLUTIONS <OpenCircle></OpenCircle>{" "}
                <p className="open-circle-text clickable">start a project</p>
              </h1>
              <h1 className="about-heading">THAT DRIVE SUCCESS</h1>
              <p className="about-subheading">
                At NexGen, we believe in the transformative power of digital
                solutions. Our team of experts is dedicated to helping
                businesses like yours thrive in the fast-paced digital
                landscape.
              </p>
            </div>
            {/* TODO: implement scrolling banner */}
            <InfiniteScroll />
          </div>
          <div className="featured-product">
            <div className="image-container">
              {/* TODO: implement svg */}
              <div className="image-svg-wrapper clickable">
                <OpenCircleForImage></OpenCircleForImage>
              </div>
              <img
                alt="Example of the Estatein Real Estate web design."
                src="./images/featured.png"
              />
            </div>
            <div className="featured-product-description gray-box">
              <h3>Estatein Real Estate</h3>
              <p>Web Development. </p>
            </div>
          </div>
        </div>
        <div className="hero-bottom outlined-box">
          <div className="achievement gray-box">
            <p className="achievement-heading roboto-mono">CLIENTS</p>
            <p className="achievement-amount">200+</p>
          </div>
          <div className="achievement gray-box">
            <p className="achievement-heading roboto-mono">PROJECTS</p>
            <p className="achievement-amount">280+</p>
          </div>
          <div className="achievement gray-box">
            <p className="achievement-heading roboto-mono">HAPPY CLIENTS</p>
            <p className="achievement-amount">100%</p>
          </div>
          <div className="achievement gray-box">
            <p className="achievement-heading roboto-mono">FOLLOWER</p>
            <p className="achievement-amount">420K</p>
          </div>
          <div className="achievement gray-box">
            <p className="achievement-heading roboto-mono">
              Years of Experience
            </p>
            <p className="achievement-amount">10+</p>
          </div>
          <div
            className="achievement gray-box"
            style={{ flexDirection: "row" }}
          >
            <OpenButton />
            <p
              className="achievement-heading roboto-mono"
              style={{ fontSize: "20px", gap: "10px" }}
            >
              KNOW MORE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
