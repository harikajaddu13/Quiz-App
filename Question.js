// src/components/Question.js
import React, { useState } from 'react';
import Options from './Options';

const questions = [
  {
    questionText: 'What is 2+2?',
    answerOptions: [
      { answerText: '3', isCorrect: false },
      { answerText: '4', isCorrect: true },
      { answerText: '5', isCorrect: false },
      { answerText: '6', isCorrect: false },
    ],
  },
  // Add more questions here
];

const Question = ({ setScore }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      // Quiz finished
      alert('Quiz finished!');
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">{questions[currentQuestion].questionText}</h2>
        <Options
          options={questions[currentQuestion].answerOptions}
          handleAnswerButtonClick={handleAnswerButtonClick}
        />
      </div>
    </div>
  );
};

export default Question;
