export default function OpenButton({ type = null }: { type: string | null }) {
  return (
    <div className={`open-button-container ${type ? `${type}` : ""}`}>
      <img alt="Open button." src="./images/top-right-arrow.png" />
    </div>
  );
}
