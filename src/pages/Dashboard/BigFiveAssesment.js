import React, { useState } from 'react';
import './BigFiveAssesment.css';
import Question from './Question';

const questions = [
  { id: 1, text: "I see myself as someone who is reserved" },
  { id: 2, text: "I see myself as someone who is generally trusting" },
  { id: 3, text: "I see myself as someone who tends to be lazy" },
  { id: 4, text: "I see myself as someone who is relaxed, handles stress well" },
  { id: 5, text: "I see myself as someone who has few artistic interests" },
  { id: 6, text: "I see myself as someone who is outgoing, sociable" },
  { id: 7, text: "I see myself as someone who tends to find fault with others" },
  { id: 8, text: "I see myself as someone who does a thorough job" },
  { id: 9, text: "I see myself as someone who gets nervous easily" },
  { id: 10, text: "I see myself as someone who has an active imagination" },
  { id: 11, text: "I see myself as someone who is talkative" },
  { id: 12, text: "I see myself as someone who can be cold and aloof" },
  { id: 13, text: "I see myself as someone who perseveres until the task is finished" },
  { id: 14, text: "I see myself as someone who can be moody" },
  { id: 15, text: "I see myself as someone who values artistic, aesthetic experiences" },
  { id: 16, text: "I see myself as someone who prefers work that is routine" },
  { id: 17, text: "I see myself as someone who is dependable and self-disciplined" },
  { id: 18, text: "I see myself as someone who tends to worry a lot" },
  { id: 19, text: "I see myself as someone who is original, comes up with new ideas" },
  { id: 20, text: "I see myself as someone who is sometimes shy, inhibited" },
  { id: 21, text: "I see myself as someone who is helpful and unselfish with others" },
  { id: 22, text: "I see myself as someone who can be somewhat careless" },
  { id: 23, text: "I see myself as someone who is relaxed, handles stress well" },
  { id: 24, text: "I see myself as someone who values artistic, aesthetic experiences" },
  { id: 25, text: "I see myself as someone who does things efficiently" },
  { id: 26, text: "I see myself as someone who remains calm in tense situations" },
  { id: 27, text: "I see myself as someone who is inventive" },
  { id: 28, text: "I see myself as someone who has an assertive personality" },
  { id: 29, text: "I see myself as someone who tends to find fault with others" },
  { id: 30, text: "I see myself as someone who does things thoroughly" },
  { id: 31, text: "I see myself as someone who gets nervous easily" },
  { id: 32, text: "I see myself as someone who values artistic, aesthetic experiences" },
  { id: 33, text: "I see myself as someone who avoids difficult problems" },
  { id: 34, text: "I see myself as someone who is dependable and self-disciplined" },
  { id: 35, text: "I see myself as someone who tends to be disorganized" },
  { id: 36, text: "I see myself as someone who values artistic, aesthetic experiences" },
  { id: 37, text: "I see myself as someone who likes to cooperate with others" },
  { id: 38, text: "I see myself as someone who is careful in speech and action" },
  { id: 39, text: "I see myself as someone who is efficient and effective at work" },
  { id: 40, text: "I see myself as someone who likes to try new experiences" },
  { id: 41, text: "I see myself as someone who gets stressed out easily" },
  { id: 42, text: "I see myself as someone who is creative and inventive" },
  { id: 43, text: "I see myself as someone who is helpful and cooperative" },
  { id: 44, text: "I see myself as someone who gets things done quickly" },
  { id: 45, text: "I see myself as someone who stays calm under pressure" },
  { id: 46, text: "I see myself as someone who likes artistic experiences" },
  { id: 47, text: "I see myself as someone who avoids new experiences" },
  { id: 48, text: "I see myself as someone who is thorough in their work" },
  { id: 49, text: "I see myself as someone who values cooperation with others" },
  { id: 50, text: "I see myself as someone who is relaxed and handles stress well" },
];

const QUESTIONS_PER_PAGE = 10;

const BigFiveAssesment = ({ onComplete }) => {
  const [answers, setAnswers] = useState({});
  const [currentPage, setCurrentPage] = useState(0);

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
    onComplete(); // Call onComplete when the assessment is done
  };

  const currentQuestions = questions.slice(
    currentPage * QUESTIONS_PER_PAGE,
    (currentPage + 1) * QUESTIONS_PER_PAGE
  );

  return (
    <div className="assessment">
      <h1>Big Five Personality Test</h1>
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

export default BigFiveAssesment;

