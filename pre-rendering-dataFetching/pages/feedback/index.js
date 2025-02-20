import React, { useState } from "react";

export default function FeedbackPage(props) {
  const [feedbackData, setFeedbackData] = useState();
  async function loadFeedbackHandler(id) {
    const response = await fetch(`/api/feedback/${id}`);
    const data = await response.json();
    setFeedbackData(data.feedback);
  }
  return (
    <React.Fragment>
      {feedbackData && <p>{feedbackData.email}</p>}
      <ul>
        {props.feedback.map((data) => (
          <li key={data.id}>
            {data.text}
            <button onClick={loadFeedbackHandler.bind(null, data.id)}>
              Show Detail
            </button>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/api/feedback");
  const data = await response.json();
  const feedbackData = data.feedback;

  if (feedbackData.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      feedback: feedbackData,
    },
  };
}
