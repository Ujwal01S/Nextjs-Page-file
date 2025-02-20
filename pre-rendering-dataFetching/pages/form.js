import { useRef, useState } from "react";

export default function HomePage() {
  const [feedbackData, setFeedbackData] = useState([]);
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  function submitFormHandler(e) {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        feedbackText: enteredFeedback,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
    //   .then((data) => console.log(data));
  }

  function loadFeedbackHandler() {
    fetch("/api/feedback")
      .then((response) => response.json())
      .then((data) => setFeedbackData(data.feedback));
  }
  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input ref={emailInputRef} type="email" id="email" />
        </div>

        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea id="feedback" ref={feedbackInputRef} rows="5"></textarea>
        </div>
        <button>Send Feedback</button>
      </form>
      <hr />

      <button onClick={loadFeedbackHandler}>Load Feedback</button>

      <ul>
        {feedbackData.map((list) => (
          <li key={list.id}>{list.text}</li>
        ))}
      </ul>
    </div>
  );
}
