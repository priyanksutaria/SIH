import React, { useContext, useState } from 'react';
import './BigFiveAssesment.css';
import SpatialQuestion from './SpatialQuestion';
import q1Image from '../../assets/images/q1.png'; // Add the image imports
import q2Image from '../../assets/images/q2.png';
import q3Image from '../../assets/images/q3.png';
import q4Image from '../../assets/images/q4.png';
import q5Image from '../../assets/images/q5.png';
import { AssessmentContext } from '../../context/AssessmentContext';

const questions = [
  { id: 1, text: "Which figure is a rotation of the object?", image: q1Image },
  { id: 2, text: "Which of the 4 figures presented (A, B, C, D) is a rotation of the first?", image: q2Image },
  { id: 3, text: "Which piece corresponds to the given solid?", image: q3Image },
  { id: 4, text: "Which object can be made by folding the given shape?", image: q4Image },
  { id: 5, text: "Which cube can be formed by folding the given shape?", image: q5Image },
];

const answerOptions = {
  1: [
    { value: 1, label: "Option A" },
    { value: 2, label: "Option B" },
    { value: 3, label: "Option C" },
    { value: 4, label: "Option D" },
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
    { value: 1, label: "Option A" },
    { value: 2, label: "Option B" },
    { value: 3, label: "Option C" },
    { value: 4, label: "Option D" },
  ],
  5: [
    { value: 1, label: "Option A" },
    { value: 2, label: "Option B" },
    { value: 3, label: "Option C" },
    { value: 4, label: "Option D" },
  ],
};

const SpatialAssesment = ({ onComplete }) => {
  const [answers, setAnswers] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const {aptitude, setaptitude} = useContext(AssessmentContext);

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
    setaptitude(true);
    onComplete(); // Call onComplete when the assessment is done
  };

  const currentQuestions = questions.slice(
    currentPage * questions.length,
    (currentPage + 1) * questions.length
  );

  return (
    <div className="assessment" style={{textAlign:'center'}}>
      <h1>Spatial Ability Test</h1>
      {currentQuestions.map((question) => (
        <SpatialQuestion
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

export default SpatialAssesment;
