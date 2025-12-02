import { headerButtons } from "../data/header-buttons";

export default function NexGenHeader() {
  return (
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
  );
}
