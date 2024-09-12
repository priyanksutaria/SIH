import React, { useState } from 'react';
import './BigFiveAssesment.css';
import NumericalQuestion from './NumericalQuestion';

const questions = [
  { id: 1, text: "Arithmetic Sequence: What is the 8th term in the arithmetic sequence: 7, 11, 15, 19, ...?" },
  { id: 2, text: "Percentage Problem with Compound Interest: You invest ₹5000 at an annual interest rate of 10%, compounded annually. What will the value of your investment be after 2 years?" },
  { id: 3, text: "Ratio and Proportion: A recipe calls for 2 cups of flour for every 3 cups of sugar. If you have 6 cups of flour, how many cups of sugar will you need to maintain the same ratio?" },
  { id: 4, text: "Algebra (Quadratic Equations): Solve for x: x² - 5x + 6 = 0." },
  { id: 5, text: "Work and Time: Two workers, A and B, can complete a task in 12 days and 18 days, respectively. How many days will it take for them to finish the task if they work together?" },
];

const answerOptions = {
  1: [
    { value: 1, label: "a) 27" },
    { value: 2, label: "b) 31" },
    { value: 3, label: "c) 35" },
    { value: 4, label: "d) 39" },
  ],
  2: [
    { value: 1, label: "a) ₹6050" },
    { value: 2, label: "b) ₹6000" },
    { value: 3, label: "c) ₹6055" },
    { value: 4, label: "d) ₹6055.50" },
  ],
  3: [
    { value: 1, label: "a) 9 cups" },
    { value: 2, label: "b) 8 cups" },
    { value: 3, label: "c) 10 cups" },
    { value: 4, label: "d) 7 cups" },
  ],
  4: [
    { value: 1, label: "a) x = 2 or x = 3" },
    { value: 2, label: "b) x = -2 or x = -3" },
    { value: 3, label: "c) x = 1 or x = 6" },
    { value: 4, label: "d) x = 3 or x = -3" },
  ],
  5: [
    { value: 1, label: "a) 7.2 days" },
    { value: 2, label: "b) 6.5 days" },
    { value: 3, label: "c) 7.5 days" },
    { value: 4, label: "d) 8 days" },
  ],
};

const NumericalAssesment = ({ onComplete }) => {
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
    <div className="assessment">
      <h1>Numerical Ability Test</h1>
      {currentQuestions.map((question) => (
        <NumericalQuestion
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

export default NumericalAssesment;
