import "./Nav.css";
import logo from "./logo.png";
import React from "react";

function Nav() {
  return (
    <nav className="nav">
      <a href="#" className="navitem">
        <img className="logo" src={logo} alt="logo" />
      </a>

      <span className="navitem verticalbar"></span>

      <a className="navitem segmentlist" href="#Skills">
        skills
      </a>
      <a className="navitem segmentlist" href="#Experience">
        experience
      </a>
      <a className="navitem segmentlist" href="#Projects">
        projects
      </a>
      <a className="navitem segmentlist" href="#Contact">
        contact
      </a>
    </nav>
  );
}

export default Nav;
