import { testimonials } from "@/common/data/testimonials";

export default function Testimonials() {
  return (
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
  );
}
