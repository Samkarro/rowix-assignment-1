export default function NewsletterForm() {
  return (
    <form className="newsletter-form">
      <input type="email" placeholder="Enter your email" />
      <button type="submit" className="upper-service-right">
        <div className="open-button-container">
          <img alt="Open button." src="./images/top-right-arrow.png" />
        </div>
      </button>
    </form>
  );
}
