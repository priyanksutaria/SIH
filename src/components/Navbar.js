import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/images/PathScoutLogo.png";
import search from "../assets/images/search-icon.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <div className="top-portion"></div>
      <div className=" navbar">
        <div className="nav-container">
          <NavLink
            exact
            to="/"
            activeClassName="active"
            className="logo-with-text nav-item-1 topbar-container"
            onClick={handleClick}
          >
            <table>
              <tr>
                <td style={{ paddingLeft: "50px"}}>
                  <img src={logo} alt="Navbar" width={"50px"} />
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "21.5px" }}>PATH SCOUT</td>
              </tr>
            </table>
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className=" nav-links"
                onClick={handleClick}
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/assesments"
                activeClassName="active"
                className=" nav-links"
                onClick={handleClick}
              >
                ASSESMENTS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/roadmap"
                activeClassName="active"
                className=" nav-links"
                onClick={handleClick}
              >
                ROAD MAP
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/simulation"
                activeClassName="active"
                className=" nav-links"
                onClick={handleClick}
              >
                SIMULATION
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/alumcon"
                activeClassName="active"
                className=" nav-links"
                onClick={handleClick}
              >
                ALUM CONNECT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/buy"
                activeClassName="active"
                className=" nav-links"
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
                className=" nav-links"
                onClick={handleClick}
              >
                <img src={search} className="search-img" alt="Navbar-img" />
              </NavLink>
            </li>
            <li className="nav-item Login-btn hide">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className=" nav-links"
                onClick={handleClick}
              >
                Login/Sign Up
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
