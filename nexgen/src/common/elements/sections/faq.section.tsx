import "../../styles/faq.styles.css";
import OpenButton from "../open-button";
import QuestionForm from "../question-form";
import QuestionList from "../question-list";

export default function Faq() {
  return (
    <section id="faq">
      <div className="faq-heading-container gray-box">
        <h2>FREQUENTLY ASKED QUESTIONS</h2>
        <div className="more-questions-button-container">
          <OpenButton type={"lighter"} />
          <p
            className="achievement-heading roboto-mono"
            style={{ fontSize: "20px" }}
          >
            VIEW ALL
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
