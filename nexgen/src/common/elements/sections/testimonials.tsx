import { testimonials } from "@/common/data/testimonials";
import "../../styles/testimonials.styles.css";
import OpenButton from "../open-button";

export default function Testimonials() {
  return (
    <section id="testimonials" className="outlined-box">
      <div className="testimonials-heading-container gray-box">
        <h2>TESTIMONIALS</h2>
        <div className="testimonials-button-container">
          <OpenButton type={"lighter"} />
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
              <div className="testimonial-top gray-box">
                <h4>{testimonial?.title}</h4>
                <p>{testimonial?.body}</p>
              </div>
              <div className="testimonial-bottom ">
                <div className="testimonial-author-container">
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
                <OpenButton
                  type={"lighter smaller testimonial-author-button"}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
