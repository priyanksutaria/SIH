import React from "react";
import "./AlumCon.css";
import client from "../assets/images/client.jpg";
import Carousel from "react-bootstrap/Carousel";
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
            orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut la
          </p>
          <Carousel interval={3000}>
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore
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
          <h2>Loreum Ipsum</h2>
          <p>
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip
          </p>
          <div className="d-flex justify-content-center">
            <a href="" style={{ textDecoration: "none" }}>
              Sign Up
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AlumCon;
