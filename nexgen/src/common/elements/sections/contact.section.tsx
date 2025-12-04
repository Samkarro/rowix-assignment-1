import { socials } from "@/common/data/socials";
import "../../styles/contact.styles.css";
import InfiniteScroll from "../infinite-scroll";
import SquareLabel from "../square-label";
import OpenButton from "../open-button";
import NexGenNav from "../NexGenNav";

export default function Contact() {
  return (
    <section id="contact">
      <div className="cta-section-container">
        <p className="cta-section-heading">
          READY TO TRANSFORM YOUR DIGITAL PRESENCE?
        </p>
        <div className="cta-section-lower">
          <p className="cta-section-subheading">
            Take the first step towards digital success with NexGen by your
            side. Our team of experts is eager to craft tailored solutions that
            drive growth for your business.
          </p>
          <div className="cta">
            <p className="final-cta-text">GET IN TOUCH</p>
            <img src="./images/top-right-arrow.png" />
          </div>
        </div>
      </div>
      <InfiniteScroll type={"scroll-type-two"} />
      <div className="major-navigation-container">
        <div className="socials-container">
          {socials.map((medium) => {
            return (
              <div className="social-medium-card gray-box">
                <div className="medium-top">
                  <SquareLabel image={medium.image} />
                  <div className="upper-service-right">
                    <OpenButton
                      type={
                        "lighter smaller lighter-border testimonial-author-button"
                      }
                      image="./images/top-right-arrow.png"
                    />
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
        <NexGenNav />
      </div>
    </section>
  );
}
