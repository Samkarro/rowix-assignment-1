export default function OpenButton({ type = null }: { type: string | null }) {
  return (
    <div className={`open-button-container ${type ? `${type}` : ""}`}>
      <img
        alt="Open button."
        src={
          type?.includes("testimonial-author-button")
            ? "./images/right-arrow.png"
            : "./images/top-right-arrow.png"
        }
      />
    </div>
  );
}
