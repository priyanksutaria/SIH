import React, { useContext, useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './Profile.css';
import { NavLink } from 'react-router-dom';
import { AssessmentContext } from '../../context/AssessmentContext';

ChartJS.register(ArcElement, Tooltip, Legend);

const Profile = () => {
  // Sample data for the doughnut chart
  const doughnutData = {
    labels: ['Personality Test', 'Numerical Test', 'Spatial Test', 'Verbal Reasoning', 'Perceptual Test'],
    datasets: [
      {
        data: [20, 20, 20, 20, 20], // Percentages for each test, 0 for incomplete tests
        backgroundColor: ['#36A2EB', '#FF6384', '#56234A', 'transparent', 'transparent'], // Transparent for incomplete tests
        hoverBackgroundColor: ['#36A2EB', '#FF6384', '#56234A', 'transparent', 'transparent'], // Hover effect on only completed tests
        borderWidth: 1,
      },
    ],
  };
  const { showcareer, setshowcareer } = useContext(AssessmentContext);
  console.log(showcareer);

  const doughnutOptions = {
    cutout: '70%', // Hollow inside the pie chart
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        enabled: true,
      },
    },
  };
  useEffect(() => {
    console.log('showcareer value:', showcareer);
  }, [showcareer]);

  return (
    <div className="profile-container">
      {/* Personal Information Section */}
      <div className="personal-info">
        <h2>Personal Information</h2>
        <ul>
          <li><strong>Name:</strong> John Doe</li>
          <li><strong>Username:</strong> johndoe123</li>
          <li><strong>Age:</strong> 22</li>
          <li><strong>School:</strong> ABC High School</li>
          <li><strong>Phone Number:</strong> +1 234-567-890</li>
          <li><strong>Email ID:</strong> johndoe@example.com</li>
        </ul>

        {/* Career Rankings Section */}
        {showcareer && 
          <div className="career-rankings">
          <h2>Your Career Rankings</h2>
          <div className="career-ranking-item">
            <div className="rank">1</div>
            <div className="career">Graphic Designer</div>
          </div>
          <div className="career-ranking-item">
            <div className="rank">2</div>
            <div className="career">Data Scientist</div>
          </div>
          <div className="career-ranking-item">
            <div className="rank">3</div>
            <div className="career">UX Designer</div>
          </div>
        </div>}
      </div>

      {/* Assessment Test Completion Section */}
      <div className="assessment-chart">
        <h2>Assessment Test Completion</h2>
        <Doughnut data={doughnutData} options={doughnutOptions} />
        <div className="chart-center-text">60% Completed</div>
        <NavLink to={'dbassesment'}><button className="complete-tests-btn">Complete My Tests</button></NavLink>
      </div>

      {/* Roadmap and Simulation Sections */}
      <div className="roadmap-simulation-container">
        {/* Roadmap Section */}
          <div className="roadmap-section">
            <h2>Career Roadmap</h2>
            <ul>
              <li>Graphic Designer <NavLink to={'dbroadmap'}><button className="view-roadmap-btn">View Roadmap</button></NavLink></li>
              <li>Data Scientist <button className="view-roadmap-btn">View Roadmap</button></li>
              <li>UX Designer <button className="view-roadmap-btn">View Roadmap</button></li>
            </ul>
          </div>

        {/* Simulation Section */}
        <div className="simulation-section">
          <h2>Simulation</h2>
          <NavLink to={'dbcoursesim'}><button className="simulation-btn">Start Coursework Simulation</button></NavLink>
          <NavLink to={'dbjobsim'}><button className="simulation-btn">Start Job Simulation</button></NavLink>
        </div>
      </div>
    </div>
  );
};

export default Profile;
