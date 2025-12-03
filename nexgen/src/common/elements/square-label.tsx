import "../styles/square-label.styles.css";

export default function SquareLabel({ image }: { image: string }) {
  return (
    <div className="square-label">
      <img src={image} />
    </div>
  );
}
