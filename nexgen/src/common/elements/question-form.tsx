"use client";
import { useState } from "react";

export default function QuestionForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  return (
    <div className="question-form">
      <h4>ASK YOUR QUESTION</h4>
      <hr />
      <form>
        <label htmlFor="question-author-name">NAME</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="question-author-name"
          placeholder="Enter your name"
        ></input>
        <label htmlFor="question-author-email">EMAIL</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="question-author-email"
          type="email"
          placeholder="Enter your email"
        ></input>
        <label htmlFor="question-body">YOUR QUESTION</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          id="question-body"
          placeholder="Enter Your Question Here ...."
        ></textarea>
        <button className="question-submit-button" type="submit">
          SEND YOUR MESSAGE
        </button>
      </form>
    </div>
  );
}
