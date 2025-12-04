import { services } from "@/common/data/services";
import "../../styles/services.styles.css";
import SquareLabel from "../square-label";
import OpenButton from "../open-button";

export default function Services() {
  return (
    <section id="services" className="outlined-box">
      <div className="services-heading-container gray-box">
        <h2>OUR SERVICES</h2>
      </div>
      <div className="services-container">
        {services.map((service) => {
          return (
            <div className="service gray-box" key={service.heading}>
              <div className="upper-area">
                <div className="upper-service-left">
                  <SquareLabel image={service.image} />
                  <h3>{service.heading}</h3>
                </div>
                <div className="upper-service-right">
                  <OpenButton
                    type={"lightest smaller"}
                    image="./images/top-right-arrow.png"
                  />
                  <p
                    className="achievement-heading roboto-mono"
                    style={{ fontSize: "20px" }}
                  >
                    BOOK A CALL
                  </p>
                </div>
              </div>
              <div className="lower-area">
                <p className="service-description">{service.description}</p>
                <p className="service-price">
                  starts from ${service.startingPrice}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
