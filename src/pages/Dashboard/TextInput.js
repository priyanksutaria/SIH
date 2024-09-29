import React from 'react';
import './Question.css'; // Use similar styling for inputs

const TextInput = ({ question, answer, onAnswerChange }) => {
  const handleInputChange = (event) => {
    onAnswerChange(question.id, event.target.value);
  };

  return (
    <div className="question">
      <p>{question.text}</p>
      <div className="skill-assessed">
        <small><strong>Skill Assessed:</strong> {question.skill}</small>
      </div>
      <textarea
        value={answer}
        onChange={handleInputChange}
        placeholder="Enter your response..."
        className="text-input"
        rows={4}
      />
    </div>
  );
};

export default TextInput;
