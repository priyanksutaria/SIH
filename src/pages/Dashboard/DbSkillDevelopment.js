import React from 'react';
import { NavLink } from 'react-router-dom';
import './DbSkillDevelopment.css'; // Import CSS for styling

const DbSkillDevelopment = () => {
  return (
    <div className="skill-development-container">
      <h1>Welcome to Skill Development Dashboard</h1>
      <p className="intro-text">
        This is your hub for building and enhancing your transferable skills, including communication, problem-solving, leadership, teamwork, adaptability, and time management. 
        These skills will help you succeed in any career path you choose. Below, you'll find tips, resources, and tools to help you get started.
      </p>

      <div className="section">
        <h2>Why Skill Development is Important</h2>
        <p>
          Developing transferable skills is essential because these skills are applicable across different industries and job roles. 
          They make you more adaptable and prepared to tackle various challenges in your personal and professional life. 
          Whether you're managing time, solving problems, or working in a team, these skills are key to career success.
        </p>
      </div>

      <div className="section">
        <h2>Top Skills to Focus On</h2>
        <ul className="skills-list">
          <li><strong>Communication:</strong> The ability to convey information clearly and effectively in any situation.</li>
          <li><strong>Problem-Solving:</strong> Approaching challenges with creativity and critical thinking to find solutions.</li>
          <li><strong>Leadership:</strong> Leading by example, motivating others, and driving your team toward success.</li>
          <li><strong>Teamwork:</strong> Working collaboratively with others to achieve shared goals.</li>
          <li><strong>Adaptability:</strong> Adjusting to new situations, obstacles, and environments quickly.</li>
          <li><strong>Time Management:</strong> Organizing your time efficiently to meet deadlines and achieve objectives.</li>
        </ul>
      </div>

      <div className="section">
        <h2>Resources for Skill Development</h2>
        <p>Here are some useful resources to help you build your skills:</p>
        <ul className="resource-list">
          <li><a href="https://www.coursera.org/" target="_blank" rel="noreferrer">Coursera</a> - Free and paid courses on skill development and various other topics.</li>
          <li><a href="https://www.edx.org/" target="_blank" rel="noreferrer">edX</a> - Courses from top universities to help you improve your skills.</li>
          <li><a href="https://www.udemy.com/" target="_blank" rel="noreferrer">Udemy</a> - Thousands of affordable courses on communication, leadership, and more.</li>
          <li><a href="https://www.khanacademy.org/" target="_blank" rel="noreferrer">Khan Academy</a> - Free educational courses on a variety of topics, including time management.</li>
          <li><a href="https://www.skillshare.com/" target="_blank" rel="noreferrer">Skillshare</a> - Learn creative and professional skills from industry leaders.</li>
        </ul>
      </div>

      <div className="section">
        <h2>Skill-Building Tips</h2>
        <ul className="tips-list">
          <li><strong>Set clear goals:</strong> Define what skills you want to improve and why they are important to you.</li>
          <li><strong>Practice regularly:</strong> Skills like communication and leadership improve with consistent practice. Look for opportunities to apply them in real-life situations.</li>
          <li><strong>Seek feedback:</strong> Ask peers, mentors, or teachers to give you constructive feedback on your progress.</li>
          <li><strong>Learn from mistakes:</strong> View failures as learning opportunities. Mistakes are an important part of the learning process.</li>
          <li><strong>Stay patient:</strong> Skill-building takes time. Focus on steady improvement, and don't get discouraged if you don't see results right away.</li>
        </ul>
      </div>

      <div className="section">
        <h2>Next Steps</h2>
        <p>
          Once you have developed a strong foundation in these skills, you can further enhance them through hands-on experiences. 
          Consider joining clubs, participating in group projects, or taking on leadership roles in your school or community. 
          You can also continue to explore new skills that align with your career goals.
        </p>
        <NavLink to="/dashboard/dbskillsimulations">
          <button className="start-btn">Start Skill Simulations</button>
        </NavLink>
      </div>
    </div>
  );
};

export default DbSkillDevelopment;
