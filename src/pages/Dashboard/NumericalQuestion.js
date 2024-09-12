import React from 'react';
import './Question.css'; // Import the CSS file

const NumericalQuestion = ({ question, options, selectedAnswer, onAnswerChange }) => {
  const handleOptionChange = (event) => {
    onAnswerChange(question.id, parseInt(event.target.value));
  };

  return (
    <div className="question">
      <p>{question.text}</p>
      <div className="options">
        {options.map((option) => (
          <label key={option.value}>
            <input
              type="radio"
              name={`question-${question.id}`}
              value={option.value}
              checked={selectedAnswer === option.value}
              onChange={handleOptionChange}
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default NumericalQuestion;
