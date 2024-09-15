import React from "react";
import Image from "../assets/images/RoadMap1.jpg";
import "./RoadMap.css";

const Roadmap = () => {
  return (
    <div className="App">
      <section className="about_section layout_padding">
        <div className="container">
          <div className="row">
            
            <div className="col-md-6">
              <div className="detail-box">
                <h2 className="custom_heading">
                  Personalized 
                  <span> Career Roadmap</span>
                </h2>
                <p>
                With PathScout, you get a clear, step-by-step roadmap designed just for you. Based on your assessment, we guide you through every stage—from deciding what to focus on after 10th grade and which exams to take after 12th, to picking the perfect college major, earning industry certifications, and even tapping into government benefits. Your career journey becomes simple, achievable, and customized to help you hit every milestone with confidence.
                </p>
                <div>
                  <a href="">Know More</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
                <img src={Image} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Roadmap;