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
        backgroundColor: ['#36A2EB', '#FF6384', '#56234A', '#abc431', 'transparent'], // Transparent for incomplete tests
        hoverBackgroundColor: ['#36A2EB', '#FF6384', '#56234A', '#abc431', '#fb6532'], // Hover effect on only completed tests
        borderWidth: 1,
      },
    ],
  };

  // Doughnut chart options
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

  const { aptitude, interest, skills } = useContext(AssessmentContext);

  // Form state for user information
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    school: '',
    marksheet: null,
    aspirations: ['', '', ''],
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      marksheet: e.target.files[0],
    }));
  };

  const handleAspirationChange = (index, value) => {
    const newAspirations = [...formData.aspirations];
    newAspirations[index] = value;
    setFormData((prevData) => ({
      ...prevData,
      aspirations: newAspirations,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true); // Set the form as submitted
    console.log("Form Data:", formData);
  };

  useEffect(() => {
    console.log('showcareer value:', aptitude);
  }, [aptitude]);

  return (
    <div className="profile-container">
      {/* Personal Information Section */}
      <div className="personal-info">
        <h2>Personal Information</h2>

        {/* Conditionally render the form or the submitted details */}
        {!isSubmitted ? (
          <form className="profile-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="age">Age:</label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="school">School/College:</label>
              <input
                type="text"
                id="school"
                name="school"
                value={formData.school}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="marksheet">
                {formData.age < 18 ? '10th Marksheet' : '12th Marksheet'}:
              </label>
              <input
                type="file"
                id="marksheet"
                name="marksheet"
                onChange={handleFileChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Aspirations (up to 3):</label>
              {[...Array(3)].map((_, index) => (
                <input
                  key={index}
                  type="text"
                  name={`aspiration-${index}`}
                  value={formData.aspirations[index]}
                  onChange={(e) => handleAspirationChange(index, e.target.value)}
                  placeholder={`Aspiration ${index + 1}`}
                  required
                />
              ))}
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        ) : (
          <div className="submitted-details">
            <ul>
              <li><strong>Name:</strong> {formData.name}</li>
              <li><strong>Email:</strong> {formData.email}</li>
              <li><strong>Age:</strong> {formData.age}</li>
              <li><strong>School/College:</strong> {formData.school}</li>
              <li><strong>Aspirations:</strong> {formData.aspirations.filter(a => a).join(', ')}</li>
            </ul>
          </div>
        )}
      </div>

      {/* Assessment Test Completion Section */}
      <div className="assessment-chart">
        <h2>Assessment Test Completion</h2>
        <Doughnut data={doughnutData} options={doughnutOptions} />
        <div className="chart-center-text">80% Completed</div>
        <NavLink to={'dbassesment'}>
          <button className="complete-tests-btn">Complete My Tests</button>
        </NavLink>
      </div>

      {/* Roadmap and Simulation Sections */}
      <div className="roadmap-simulation-container">
        {aptitude && interest && skills && <div className="roadmap-section">
          <h2>Career Roadmap</h2>
          <ul>
            <li>
              Graphic Designer <NavLink to={'dbroadmap'}><button className="view-roadmap-btn">View Roadmap</button></NavLink>
            </li>
            <li>Data Scientist <button className="view-roadmap-btn">View Roadmap</button></li>
            <li>UX Designer <button className="view-roadmap-btn">View Roadmap</button></li>
          </ul>
        </div>}

        {/* <div className="simulation-section">
          <h2>Simulation</h2>
          <NavLink to={'dbcoursesim'}>
            <button className="simulation-btn">Start Coursework Simulation</button>
          </NavLink>
          <NavLink to={'dbjobsim'}>
            <button className="simulation-btn">Start Job Simulation</button>
          </NavLink>
        </div> */}
      </div>
    </div>
  );
};

export default Profile;
