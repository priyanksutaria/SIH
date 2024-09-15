import React, { useState } from "react";
import Image4 from "../assets/images/Assesment1.jpg";
import { NavLink } from "react-router-dom";
import AssessmentIcon from '@mui/icons-material/Assessment';
import CalculateIcon from '@mui/icons-material/Calculate';
import MapIcon from '@mui/icons-material/Map';
import VisibilityIcon from '@mui/icons-material/Visibility';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import "./Assesments.css";

const Assesments = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <section className="service_section layout_padding">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 offset-md-2">
            <h2 className="custom_heading">
              <span>Assessment </span>Tests
            </h2>
            <div className="content_box">
              <p>
                Choosing a career is about more than just picking something that sounds good—it should reflect who you truly are.
                That’s why our assessments go beyond just skills—they dive into your personality, strengths, and preferences
                to recommend paths that truly fit you. By tailoring recommendations to your individual profile, PathScout helps
                you uncover your potential and guides you toward careers where you can thrive.
              </p>
              <div className="steps_container">
                <div className="step_box step1">
                  <div className="step_number">1</div>
                  <div className="step_content">
                    <h3>Big 5 Personality (Ocean Test) Assessment</h3>
                  </div>
                </div>
                <div className="step_box step2">
                  <div className="step_number">2</div>
                  <div className="step_content">
                    <h3>Numerical Assessment</h3>
                  </div>
                </div>
                <div className="step_box step3">
                  <div className="step_number">3</div>
                  <div className="step_content">
                    <h3>Spatial Assessment</h3>
                  </div>
                </div>
                <div className="step_box step4">
                  <div className="step_number">4</div>
                  <div className="step_content">
                    <h3>Perceptual Assessment</h3>
                  </div>
                </div>
                <div className="step_box step5">
                  <div className="step_number">5</div>
                  <div className="step_content">
                    <h3>Verbal Reasoning</h3>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Get Started
              </NavLink>
            </div>
            <br />
          </div>
          <div className="col-md-4">
            <img src={Image4} className="w-100" alt="Assessment" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assesments;
