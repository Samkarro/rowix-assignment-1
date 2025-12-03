"use client";

import { MouseEventHandler, useState } from "react";
import "../styles/faq-extras/question-list.css";

export default function QuestionList() {
  const [questions, setQuestions] = useState([
    {
      prompt: "How long does it take to complete a web development project?",
      answer:
        "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
      active: false,
    },
    {
      prompt: "Can you handle large-scale mobile app development projects?",
      answer: "Placeholder answer",
      active: false,
    },
    {
      prompt: "Can you integrate third-party APIs into our mobile app?",
      answer: "Placeholder answer",
      active: false,
    },
    {
      prompt: "How do you ensure cross-platform compatibility for mobile apps?",
      answer: "Placeholder answer",
      active: false,
    },
    {
      prompt: "What is your approach to user experience (UX) design?",
      answer: "Placeholder answer",
      active: false,
    },
  ]);

  return (
    <div className="question-list">
      {questions.map((question, index) => {
        const toggleQuestion = (
          index: number
        ): MouseEventHandler<HTMLDivElement> | undefined => {
          const newQuestions = [...questions];
          const question = newQuestions[index];
          question.active = !question.active;
          newQuestions[index] = question;
          setQuestions(newQuestions);
          return;
        };

        return (
          <div
            className={`question gray-box ${question.active ? "open" : ""}`}
            key={question.prompt}
          >
            <div
              className="question-top clickable"
              onClick={() => toggleQuestion(index)}
            >
              <p className={`prompt ${question.active ? "prompt-active" : ""}`}>
                {question.prompt}
              </p>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6L8 10L12 6"
                  stroke="#717182"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {question.active === true && (
              <p className="answer">{question.answer}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
