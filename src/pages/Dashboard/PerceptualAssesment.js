import React, { useState } from 'react';
import './BigFiveAssesment.css';
import PerceptualQuestion from './PerceptualQuestion';
import qp1Image from '../../assets/images/qp1.png'; // Add the image imports
import qp2Image from '../../assets/images/qp2.png';
import qp3Image from '../../assets/images/qp3.png';
import qp4Image from '../../assets/images/qp4.png';
import qp5Image from '../../assets/images/qp5.png';

const questions = [
  { id: 1, text: "Identify the corresponding silhouette of the image", image: qp1Image },
  { id: 2, text: "Choose the correct Top View on basis of the Front and End View", image: qp2Image },
  { id: 3, text: "Choose the correct Front View", image: qp3Image },
  { id: 4, text: "What is the correct order of the shapes if they are arranged in a sequence of gradual rotation", image: qp4Image },
  { id: 5, text: "Which of the 3D shapes would be formed if the 2D figure was folded along its edges?", image: qp5Image },
];

const answerOptions = {
  1: [
    { value: 1, label: "Option A" },
    { value: 2, label: "Option B" },
    { value: 3, label: "Option C" },
    { value: 4, label: "Option D" },
    { value: 5, label: "Option E" },
  ],
  2: [
    { value: 1, label: "Option A" },
    { value: 2, label: "Option B" },
    { value: 3, label: "Option C" },
    { value: 4, label: "Option D" },
  ],
  3: [
    { value: 1, label: "Option A" },
    { value: 2, label: "Option B" },
    { value: 3, label: "Option C" },
    { value: 4, label: "Option D" },
  ],
  4: [
    { value: 1, label: "2-3-1-4" },
    { value: 2, label: "3-2-1-4" },
    { value: 3, label: "2-1-3-4" },
    { value: 4, label: "1-2-3-4" },
  ],
  5: [
    { value: 1, label: "Option A" },
    { value: 2, label: "Option B" },
    { value: 3, label: "Option C" },
    { value: 4, label: "Option D" },
  ],
};

const PerceptualAssesment = ({ onComplete }) => {
  const [answers, setAnswers] = useState({});
  const [currentPage, setCurrentPage] = useState(0);

  const handleAnswerChange = (questionId, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  const handleNextPage = () => {
    if ((currentPage + 1) * questions.length < questions.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSubmit = () => {
    console.log("User answers:", answers);
    onComplete(); // Call onComplete when the assessment is done
  };

  const currentQuestions = questions.slice(
    currentPage * questions.length,
    (currentPage + 1) * questions.length
  );

  return (
    <div className="assessment" style={{textAlign:'center'}}>
      <h1>Perceptual Ability Test</h1>
      {currentQuestions.map((question) => (
        <PerceptualQuestion
          key={question.id}
          question={question}
          selectedAnswer={answers[question.id]}
          options={answerOptions[question.id]}
          onAnswerChange={handleAnswerChange}
        />
      ))}
      <div className="pagination-buttons">
        {currentPage > 0 && (
          <button onClick={handleNextPage}>Next</button>
        )}
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default PerceptualAssesment;
