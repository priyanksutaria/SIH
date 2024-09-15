import React from "react";
import "./AlumCon.css";
import client from "../assets/images/client.jpg";
import Carousel from "react-bootstrap/Carousel";
import { NavLink } from "react-router-dom";
import Alum1 from '../assets/images/Alum1.png'
import Alum2 from '../assets/images/Alum2.png'
const AlumCon = () => {
  return (
    <>
      <section className="client_section layout_padding-bottom">
        <div className="container">
          <h2 className="custom_heading text-center">
            Alum 
            <span> Connect </span>
          </h2>
          <p className="text-center">
          Through our Alum Connect feature, you can network with professionals who have successfully navigated their career paths. Get advice, insights, and mentorship from those who have been in your shoes and are now thriving in industries you aspire to join.
          </p>
          <Carousel interval={3000}>
            <Carousel.Item>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="layout_padding2 pl-100">
                    <div className="client_container ">
                      <div className="img_box">
                        <img src={Alum1} width={"210px"} alt="" />
                      </div>
                      <div className="detail_box">
                        <h5>Shaun Mathews</h5>
                        <p>
                        Started his career as a junior frontend developer after earning a degree in Computer Science. He worked with HTML, CSS, and JavaScript to build interactive websites. Over time, he mastered React and Angular, gaining recognition for his user-friendly designs. Now, John leads a team of developers, focusing on responsive design and ensuring cross-platform compatibility.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="layout_padding2 pl-100">
                    <div className="client_container ">
                      <div className="img_box">
                        <img src={client} alt="" />
                      </div>
                      <div className="detail_box">
                        <h5>Sandy Mark</h5>
                        <p>
                        A passionate graphic designer, began with a background in Fine Arts. Her expertise in Adobe Illustrator and Photoshop helped her land her first job in a creative agency. She works on logos, brand identity, and digital media. Emma's ability to balance creativity with client needs has made her a sought-after freelancer.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="layout_padding2 pl-100">
                    <div className="client_container ">
                      <div className="img_box">
                        <img src={Alum2} width={"210px"} alt="" />
                      </div>
                      <div className="detail_box">
                        <h5>Liam Livingstone</h5>
                        <p>
                        Pursued painting after studying at an art school. He started with landscapes but gradually transitioned into abstract art, using vibrant colors and textures. His work has been exhibited in local galleries, and he's now commissioned for private and corporate collections, balancing artistic freedom with commercial projects.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
      <section className="buy_section layout_padding">
        <div className="container">
          <h2>Let's Get Started</h2>
          <p>
          Sign up now to take control of your career journey.
          Discover personalized guidance and opportunities!
          </p>
          <div className="d-flex justify-content-center">
            <NavLink to={"/authpage"} style={{ textDecoration: "none" }}>
              Sign Up
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default AlumCon;
