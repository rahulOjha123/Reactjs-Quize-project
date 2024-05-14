import React, { useState } from "react";
import "../QuziProject.js/Home.css";
import { question } from "./data";

function Quzi() {
  const [showfinal, setShowfinal] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const optionClicked = (isCurrect) => {
    console.log(isCurrect);
    if (isCurrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < question.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowfinal(true);
    }
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowfinal(false);
  };
  return (
    <div className="apps">
      <h1>Indian Quize</h1>
      <h2>Current Score:{score}</h2>
      {showfinal ? (
        <div className="final-result">
          <h1>Final Results</h1>
          <h2>
            {currentQuestion + 1} out of {question.length} correct - (
            {(score / question.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        <div className="question-card">
          <h3>
            Question {currentQuestion + 1} out of {question.length}
          </h3>
          <h3 className="question-text">
            <span style={{ color: "white", paddingRight: "10px" }}>
              {currentQuestion + 1}.
            </span>
            {question[currentQuestion].text}
          </h3>
          <ul>
            {question[currentQuestion].option.map((option) => {
              return (
                <li
                  onClick={() => optionClicked(option.isCorrect)}
                  key={option.id}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Quzi;
