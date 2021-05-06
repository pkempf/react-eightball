import React, { useState } from "react";
import answersList from "./answersList";
import "./EightBall.css";

const EightBall = ({ answers = answersList }) => {
  const [color, setColor] = useState("black");
  const [question, setQuestion] = useState("Think of a Question");

  const updateEightBall = () => {
    let idx = Math.floor(Math.random() * answers.length);
    setColor(answers[idx].color);
    setQuestion(answers[idx].msg);
  };

  const resetEightBall = () => {
    setColor("black");
    setQuestion("Think of a Question");
  };

  return (
    <div>
      <div
        className="EightBall"
        style={{ backgroundColor: color }}
        onClick={updateEightBall}
      >
        <p className="EightBall-question">{question}</p>
      </div>
      <button onClick={resetEightBall} className="EightBall-reset">
        Reset
      </button>
    </div>
  );
};

export default EightBall;
