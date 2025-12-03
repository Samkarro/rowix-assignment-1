export default function OpenButton({
  type,
  image,
}: {
  type: string | null;
  image: string;
}) {
  return (
    <div className={`open-button-container ${type ? `${type}` : ""}`}>
      <img alt="Open button." src={image} />
    </div>
  );
}
