import { headerButtons } from "../data/header-buttons";
import "../styles/header.styles.css";

export default function NexGenHeader() {
  return (
    <header className="gray-box">
      <div className="header-logo-container">
        <img alt="NexGen Logo." src="./images/nexgen.png" />
      </div>
      <div className="header-buttons-container">
        {headerButtons.map((text, index) => {
          return (
            <div
              key={text}
              className={`header-button roboto-mono clickable ${
                index === headerButtons.length - 1 ? "cta" : ""
              } ${index === 0 ? "header-active" : ""}`}
            >
              {text.toUpperCase()}
            </div>
          );
        })}
      </div>
    </header>
  );
}
