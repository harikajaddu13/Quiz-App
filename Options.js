// src/components/Options.js
import React from 'react';

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

export default Options;
