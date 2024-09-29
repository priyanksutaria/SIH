import React, { useContext, useState } from 'react';
import './BigFiveAssesment.css'; // Reusing the same CSS for consistency
import TextInput from './TextInput'; // Create a reusable TextInput component
import { AssessmentContext } from '../../context/AssessmentContext';

// Scenario-based skill assessment questions
const questions = [
  { id: 1, text: 'You are working on a group project, but the printer stops working the night before the deadline. The teacher has specifically requested a printed version. What would you do?', skill: 'Problem-solving, initiative' },
  { id: 2, text: 'You’ve been asked to introduce a new student to the school. The student is shy and doesn’t speak much. How would you help them feel comfortable?', skill: 'Communication, empathy' },
  { id: 3, text: 'You have exams in two weeks, and you also have a school sports competition coming up. How do you manage your time to prepare for both?', skill: 'Time management, prioritization' },
  { id: 4, text: 'You are part of a group for a science project, but two of your teammates are not contributing. How would you handle the situation?', skill: 'Teamwork, conflict resolution' },
  { id: 5, text: 'You are the captain of your school’s sports team, and your team is losing motivation after a few bad matches. How would you motivate them for the next game?', skill: 'Leadership, motivation' },
  { id: 6, text: 'During an art class, the material you planned to use for your project (clay) is unavailable. The teacher suggests using paper instead. How do you handle this change?', skill: 'Adaptability, creativity' },
  { id: 7, text: 'You have two conflicting responsibilities—attending a friend’s birthday party and completing a homework assignment that’s due tomorrow. How would you decide what to do?', skill: 'Decision-making, prioritization' },
  { id: 8, text: 'During a group debate, one of your classmates starts arguing aggressively, making it difficult for others to share their opinions. How would you handle this situation?', skill: 'Conflict resolution, communication' },
  { id: 9, text: 'You notice that your school\'s recycling program is not being followed properly, with trash often being mixed in with recycling. What would you do to improve the situation?', skill: 'Initiative, problem-solving' },
  { id: 10, text: 'You’re asked to give a presentation on a historical event, but the topic is one you’re unfamiliar with. How would you approach gathering information and preparing your presentation?', skill: 'Critical thinking, resourcefulness' },
];

const SkillsAssessment = ({ onComplete }) => {
  const [answers, setAnswers] = useState({});
  const {setskills} = useContext(AssessmentContext);
  const [currentPage, setCurrentPage] = useState(0);
  const QUESTIONS_PER_PAGE = 5;

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
    setskills(true);
    onComplete(); // Call onComplete when the assessment is done
  };

  const currentQuestions = questions.slice(
    currentPage * QUESTIONS_PER_PAGE,
    (currentPage + 1) * QUESTIONS_PER_PAGE
  );

  return (
    <div className="assessment">
      <h1>Skills Assessment</h1>
      {currentQuestions.map((question) => (
        <TextInput
          key={question.id}
          question={question}
          answer={answers[question.id] || ''}
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

export default SkillsAssessment;
