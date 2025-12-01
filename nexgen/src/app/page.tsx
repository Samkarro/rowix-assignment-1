import { headerButtons } from "@/common/data/header-buttons";

export default function Home() {
  return (
    <div>
      <header>
        <div className="header-logo-container">
          <img alt="NexGen Logo." src="./images/image.png" />
        </div>
        <div className="header-buttons-container">
          {headerButtons.map((text) => {
            return (
              <div
                key={text}
                id={`#${text}`}
                className="header-button roboto-mono"
              >
                {text.toUpperCase()}
              </div>
            );
          })}
        </div>
      </header>
      <main></main>
    </div>
  );
}
