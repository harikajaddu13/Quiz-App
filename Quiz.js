// src/components/Quiz.js

import React, { useState } from 'react';
import Question from './Question';

const Quiz = () => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10); // Time per question in seconds

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setTimeLeft(10); // Reset timer for next question
    } else {
      // Quiz finished
      alert('Quiz finished! Your score is ' + score);
    }
  };

  // Array of engineering-related questions
  const questions = [
    {
      questionText: 'What is the symbol for Iron?',
      answerOptions: [
        { answerText: 'Fe', isCorrect: true },
        { answerText: 'Ir', isCorrect: false },
        { answerText: 'In', isCorrect: false },
        { answerText: 'Io', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the SI unit of force?',
      answerOptions: [
        { answerText: 'Watt', isCorrect: false },
        { answerText: 'Newton', isCorrect: true },
        { answerText: 'Joule', isCorrect: false },
        { answerText: 'Volt', isCorrect: false },
      ],
    },
    // Add more engineering-related questions here
  ];

  return (
    <div className="container">
      <h1 className="text-center mt-5 mb-4">Engineering Quiz</h1>
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{questions[currentQuestion].questionText}</h2>
          <div className="text-center mb-3">
            <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} />
          </div>
          <Options
            options={questions[currentQuestion].answerOptions}
            handleAnswerButtonClick={handleAnswerButtonClick}
          />
        </div>
      </div>
      <div className="text-center mt-3">
        <p>Question {currentQuestion + 1} of {questions.length}</p>
        <ProgressBar currentQuestion={currentQuestion} totalQuestions={questions.length} />
      </div>
      <p className="text-center">Score: {score}</p>
    </div>
  );
};

const Timer = ({ timeLeft, setTimeLeft }) => {
  // Timer logic
  React.useEffect(() => {
    if (timeLeft === 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, setTimeLeft]);

  return (
    <div>
      Time left: {timeLeft}s
    </div>
  );
};

const ProgressBar = ({ currentQuestion, totalQuestions }) => {
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;
  return (
    <div className="progress">
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: `${progress}%` }}
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  );
};

const Options = ({ options, handleAnswerButtonClick }) => {
  return (
    <div>
      {options.map((option, index) => (
        <button
          key={index}
          className="btn btn-primary mr-2 mb-2"
          onClick={() => handleAnswerButtonClick(option.isCorrect)}
        >
          {option.answerText}
        </button>
      ))}
    </div>
  );
};

export default Quiz;


