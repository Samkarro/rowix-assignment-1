import OpenButton from "./open-button";

export default function NewsletterForm() {
  return (
    <form className="newsletter-form">
      <input type="email" placeholder="Enter your email" />
      <button type="submit" className="upper-service-right">
        <OpenButton
          type={"lighter smaller lighter-border testimonial-author-button"}
          image="./images/top-right-arrow.png"
        />
      </button>
    </form>
  );
}
