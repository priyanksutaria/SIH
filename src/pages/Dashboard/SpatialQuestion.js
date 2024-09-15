import React from 'react';
import './Question.css'; // Reuse the same CSS as NumericalQuestion for consistency

const SpatialQuestion = ({ question, options, selectedAnswer, onAnswerChange }) => {
  const handleOptionChange = (event) => {
    onAnswerChange(question.id, parseInt(event.target.value));
  };

  return (
    <div className="question">
      <p>{question.text}</p>
      <img src={question.image} alt={`Question ${question.id}`} className="question-image" />
      <div className="options" style={{marginLeft:'105px'}}>
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

export default SpatialQuestion;
