import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slider from "../assets/images/Slider2.jpg";
import Process from "./Process";
import Assesments from "./Assesments";
import AlumCon from "./AlumCon";

import Roadmap from "./RoadMap";
import Simulation from "./Simulation";
const Home = () => {
  return (
    <>
      <Carousel style={{ width: "100%", objectFit: "cover" }}>
        <Carousel.Item>
          <div className="bg-img">
            <div className="left-portion">
              <h1>PathScout</h1>
              <h1>
                <span>Find Career Paths, Not Just Jobs</span>
              </h1>
              <p>
                <span>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever
                </span>
              </p>
              <div className="btn_box">
                <a href="/buy" class="btn-1">
                  Get Started
                </a>
                <a href="/contact" class="btn-2">
                  Know More
                </a>
              </div>
            </div>
            <div className="right-portion">
              <img
                className="d-block  img-position img-fluid"
                src={slider} width={"20px"}
                alt="First slide"
              />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="bg-img">
            <div className="left-portion">
              <h1>PathScout</h1>
              <h1>
                <span>Find Career Paths, Not Just Jobs</span>
              </h1>
              <p>
                <span>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever
                </span>
              </p>
              <div className="btn_box">
                <a href="/buy" class="btn-1">
                  Get Started
                </a>
                <a href="/contact" class="btn-2">
                  Know More
                </a>
              </div>
            </div>
            <div className="right-portion">
              <img
                className="d-block  img-position img-fluid"
                src={slider} width={"20px"}
                alt="First slide"
              />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="bg-img">
            <div className="left-portion">
              <h1>PathScout</h1>
              <h1>
                <span>Find Career Paths, Not Just Jobs</span>
              </h1>
              <p>
                <span>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever
                </span>
              </p>
              <div className="btn_box">
                <a href="/buy" class="btn-1">
                  Get Started
                </a>
                <a href="/contact" class="btn-2">
                  Know More
                </a>
              </div>
            </div>
            <div className="right-portion">
              <img
                className="d-block  img-position img-fluid"
                src={slider} width={"20px"}
                alt="First slide"
              />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      <Process />
      <Assesments />
      <Roadmap />
      <Simulation/>
      <AlumCon />

      {/* <Contact contactpos='unset'/> */}
    </>
  );
};

export default Home;
