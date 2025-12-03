import "../../styles/faq.styles.css";
import QuestionForm from "../question-form";
import QuestionList from "../question-list";

export default function Faq() {
  return (
    <section id="faq">
      <div className="faq-heading-container">
        <h2>FREQUENTLY ASKED QUESTIONS</h2>
        {/* TODO: make this a module */}
        <div className="upper-service-right">
          <div className="open-button-container">
            <img alt="Open button." src="./images/top-right-arrow.png" />
          </div>
          <p
            className="achievement-heading roboto-mono"
            style={{ fontSize: "20px" }}
          >
            DETAILS
          </p>
        </div>
      </div>
      <div className="faq-bottom">
        <QuestionList />
        <QuestionForm />
      </div>
    </section>
  );
}
