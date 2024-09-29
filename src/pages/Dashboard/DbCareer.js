import React, { useContext, useState, useEffect } from 'react';
import './DbCareer.css'; // Import the CSS for styling
import { NavLink } from 'react-router-dom';
import { AssessmentContext } from '../../context/AssessmentContext';

export default function DbCareer() {
  const [hasCompletedTests, setHasCompletedTests] = useState(false); 
  const { aptitude, skills, interest } = useContext(AssessmentContext);
  
  // Dummy data for the top 3 careers
  const topCareers = [
    { id: 1, title: 'Graphic Designer', description: 'Design visuals, graphics, and layouts for various platforms and media.' },
    { id: 2, title: 'Data Scientist', description: 'Analyze large datasets to derive insights and help make data-driven decisions.' },
    { id: 3, title: 'UX Designer', description: 'Create user-friendly designs and improve user experiences across products.' },
  ];

  useEffect(() => {
    if (aptitude && skills && interest) {
      setHasCompletedTests(true);
    }
  }, [aptitude, skills, interest]);

  return (
    <div className="careers-container">
      {hasCompletedTests ? (
        <>
          {/* Additional content explaining the results */}
          <h1>Career Recommendations</h1>
          <p className="introduction-text">
            Based on the skills, interests, and aptitude tests you've completed, we've selected these top 3 careers for you. 
            These careers match your personal abilities and preferences, making them a great fit for your future career path.
          </p>
          
          <h2>Top 3 Careers Recommended for You</h2>
          <div className="careers-list">
            {topCareers.map((career) => (
              <div key={career.id} className="career-item">
                <h3>{career.title}</h3>
                <p>{career.description}</p>
              </div>
            ))}
          </div>

          {/* Additional guidance after career recommendations */}
          <div className="career-guidance">
            <h3>What can you do next?</h3>
            <p>
              You can explore more careers by taking advanced assessments, reviewing detailed career paths, or simulating job experiences. 
              Click the buttons below to explore further.
            </p>
            <NavLink to="/dashboard/explorecareers">
              <button className="explore-btn">Explore More Careers</button>
            </NavLink>
            <NavLink to="/dashboard/dbjobsim">
              <button className="explore-btn">Try Job Simulations</button>
            </NavLink>
          </div>
        </>
      ) : (
        <div className="complete-tests-prompt">
          <h2>Please Complete Your Assessments</h2>

          {!aptitude && (
            <div>
              <p>You haven't completed the Aptitude Test yet. Click below to complete it.</p>
              <NavLink to="/dashboard/dbassesment">
                <button className="complete-tests-btn">Complete Aptitude Test</button>
              </NavLink>
            </div>
          )}

          {!skills && (
            <div>
              <p>You haven't completed the Skills Test yet. Click below to complete it.</p>
              <NavLink to="/dashboard/dbskills">
                <button className="complete-tests-btn">Complete Skills Test</button>
              </NavLink>
            </div>
          )}

          {!interest && (
            <div>
              <p>You haven't completed the Interest Test yet. Click below to complete it.</p>
              <NavLink to="/dashboard/dbinterests">
                <button className="complete-tests-btn">Complete Interest Test</button>
              </NavLink>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
