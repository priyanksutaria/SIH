import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/images/PathScoutLogo.png";
import search from "../assets/images/search-icon.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false); // State for dropdown menu

  const handleClick = () => setClick(!click);
  const handleDropdownToggle = () => setDropdown(!dropdown); // Toggle dropdown on hover

  return (
    <>
      <div className="top-portion"></div>
      <div className="navbar">
        <div className="nav-container">
          <div className="nav-left">
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="logo-with-text nav-item-1"
              onClick={handleClick}
            >
              <img src={logo} alt="Navbar" width={"50px"} />
              <span className="path-scout-title">PATH SCOUT</span>
            </NavLink>
          </div>

          <div className="nav-center">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  HOME
                </NavLink>
              </li>
              <li
                className="nav-item"
                onMouseEnter={handleDropdownToggle}
                onMouseLeave={handleDropdownToggle}
              >
                <span className="nav-links dropdown-title">FEATURES</span>
                <ul className={dropdown ? "dropdown-menu show" : "dropdown-menu"}>
                  <li>
                    <NavLink
                      exact
                      to="/assesments"
                      activeClassName="active"
                      className="dropdown-link"
                      onClick={handleClick}
                    >
                      ASSESMENTS
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/roadmap"
                      activeClassName="active"
                      className="dropdown-link"
                      onClick={handleClick}
                    >
                      ROAD MAP
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/simulation"
                      activeClassName="active"
                      className="dropdown-link"
                      onClick={handleClick}
                    >
                      SIMULATION
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/alumcon"
                      activeClassName="active"
                      className="dropdown-link"
                      onClick={handleClick}
                    >
                      ALUM CONNECT
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/dashboard"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  DASHBOARD
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  <img src={search} className="search-img" alt="Search" />
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="nav-right">
            <NavLink
              exact
              to="/authpage"
              activeClassName="active"
              className="nav-links login-btn"
              onClick={handleClick}
            >
              Login/Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
