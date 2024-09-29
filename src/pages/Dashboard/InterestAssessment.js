import React, { useContext, useState } from 'react';
import './BigFiveAssesment.css'; // Reusing the same CSS as your BigFiveAssesment for consistency
import Question from './Question'; // Reusing the Question component for consistency
import { AssessmentContext } from '../../context/AssessmentContext';

const questions = [
    { id: 1, text: "Build kitchen cabinets" },
    { id: 2, text: "Lay brick or tile" },
    { id: 3, text: "Develop a new medicine" },
    { id: 4, text: "Study ways to reduce water pollution" },
    { id: 5, text: "Write books or plays" },
    { id: 6, text: "Play a musical instrument" },
    { id: 7, text: "Teach an individual an exercise routine" },
    { id: 8, text: "Help people with personal or emotional problems" },
    { id: 9, text: "Buy and sell stocks and bonds" },
    { id: 10, text: "Manage a retail store" },
    { id: 11, text: "Develop a spreadsheet using computer software" },
    { id: 12, text: "Proofread records or forms" },
    { id: 13, text: "Repair household appliances" },
    { id: 14, text: "Raise fish in a fish hatchery" },
    { id: 15, text: "Conduct chemical experiments" },
    { id: 16, text: "Study the movement of planets" },
    { id: 17, text: "Compose or arrange music" },
    { id: 18, text: "Draw pictures" },
    { id: 19, text: "Give career guidance to people" },
    { id: 20, text: "Perform rehabilitation therapy" },
    { id: 21, text: "Operate a beauty salon or barber shop" },
    { id: 22, text: "Manage a department within a large company" },
    { id: 23, text: "Install software across computers on a large network" },
    { id: 24, text: "Operate a calculator" },
    { id: 25, text: "Assemble electronic parts" },
    { id: 26, text: "Drive a truck to deliver packages to offices and homes" },
    { id: 27, text: "Examine blood samples using a microscope" },
    { id: 28, text: "Investigate the cause of a fire" },
    { id: 29, text: "Create special effects for movies" },
    { id: 30, text: "Paint sets for plays" },
    { id: 31, text: "Do volunteer work at a non-profit organization" },
    { id: 32, text: "Teach children how to play sports" },
    { id: 33, text: "Start your own business" },
    { id: 34, text: "Negotiate business contracts" },
    { id: 35, text: "Keep shipping and receiving records" },
    { id: 36, text: "Calculate the wages of employees" },
    { id: 37, text: "Test the quality of parts before shipment" },
    { id: 38, text: "Repair and install locks" },
    { id: 39, text: "Develop a way to better predict the weather" },
    { id: 40, text: "Work in a biology lab" },
    { id: 41, text: "Write scripts for movies or television shows" },
    { id: 42, text: "Perform jazz or tap dance" },
    { id: 43, text: "Teach sign language to people who are deaf or hard of hearing" },
    { id: 44, text: "Help conduct a group therapy session" },
    { id: 45, text: "Represent a client in a lawsuit" },
    { id: 46, text: "Market a new line of clothing" },
    { id: 47, text: "Inventory supplies using a hand-held computer" },
    { id: 48, text: "Record rent payments" },
    { id: 49, text: "Set up and operate machines to make products" },
    { id: 50, text: "Put out forest fires" },
    { id: 51, text: "Invent a replacement for sugar" },
    { id: 52, text: "Do laboratory tests to identify diseases" },
    { id: 53, text: "Sing in a band" },
    { id: 54, text: "Edit movies" },
    { id: 55, text: "Take care of children at a day-care center" },
    { id: 56, text: "Teach a high-school class" },
    { id: 57, text: "Sell merchandise at a department store" },
    { id: 58, text: "Manage a clothing store" },
    { id: 59, text: "Keep inventory records" },
    { id: 60, text: "Stamp, sort, and distribute mail for an organization" }
  ];
  

const QUESTIONS_PER_PAGE = 10; // Same pagination logic as your previous assessments

const InterestAssessment = ({ onComplete }) => {
  const [answers, setAnswers] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const {setinterest} = useContext(AssessmentContext);

  const handleAnswerChange = (questionId, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  const handleNextPage = () => {
    if ((currentPage + 1) * QUESTIONS_PER_PAGE < questions.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSubmit = () => {
    console.log("User answers:", answers);
    setinterest(true);
    onComplete(); // Call onComplete when the assessment is done
  };

  const currentQuestions = questions.slice(
    currentPage * QUESTIONS_PER_PAGE,
    (currentPage + 1) * QUESTIONS_PER_PAGE
  );

  return (
    <div className="assessment">
      <h1>RIASEC Interests Assessment</h1>
      {currentQuestions.map((question) => (
        <Question
          key={question.id}
          question={question}
          selectedAnswer={answers[question.id]}
          onAnswerChange={handleAnswerChange}
        />
      ))}
      <div className="pagination-buttons">
        {currentPage > 0 && (
          <button onClick={handlePreviousPage}>Previous</button>
        )}
        {(currentPage + 1) * QUESTIONS_PER_PAGE < questions.length ? (
          <button onClick={handleNextPage}>Next</button>
        ) : (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
};

export default InterestAssessment;
