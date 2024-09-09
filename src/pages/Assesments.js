import React, { useState } from "react";
import Image1 from "../assets/images/s-1.png";
import Image2 from "../assets/images/s-2.png";
import Image3 from "../assets/images/s-3.png";
import Image4 from "../assets/images/Assesment1.jpg";
import { NavLink } from "react-router-dom";
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
                <span>Assesment </span>Tests
              </h2>
              <div className="container layout_padding2">
                <div className="row">
                  <div className="col-md-4">
                    <div className="img_box">
                      <img src={Image1} />
                    </div>
                    <div className="detail_box">
                      <h6>Aptitude</h6>
                      <p>
                        onsectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exe
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="img_box">
                      <img src={Image2} />
                    </div>
                    <div className="detail_box">
                      <h6>Personality</h6>
                      <p>
                        onsectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exe
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="img_box">
                      <img src={Image3} />
                    </div>
                    <div className="detail_box">
                      <h6>Verbal Reasoning</h6>
                      <p>
                        onsectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exe
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className=" nav-links"
                onClick={handleClick}
              >Get Started
              </NavLink>
              </div>
              <br/>
            </div>
            <div className="col-md-4 ">
              <img src={Image4} className="w-100" />
            </div>
          </div>
        </div>
      </section>
  );
};

export default Assesments;
