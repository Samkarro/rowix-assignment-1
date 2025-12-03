import { reasons } from "@/common/data/reasons";
import "../../styles/reasons.styles.css";

export default function Reasons() {
  return (
    <section id="reasons" className="outlined-box">
      <div className="reasons-heading-container gray-box">
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
                  <img alt="Open button." src="./images/top-right-arrow.png" />
                </div>
                <p>Learn More</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
