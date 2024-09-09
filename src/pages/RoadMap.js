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
                  Deatiled
                  <span> Roadmap</span>
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since theLorem Ipsum is simply dummy
                  text of the printing and typesetting industry. Lorem Ipsum has
                  been the industry's standard dummy text ever since the
                </p>
                <div>
                  <a href="">About More</a>
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