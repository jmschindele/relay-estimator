import React from "react";
import { Link } from "react-router-dom";
import "./style.css";







function NavBar() {
  return (

    <nav className="navbar" >
    <ul className="nav nav-pills nav-justified">
      <li className="nav-item">
        <Link to="/login">
          Sign In
        </Link>
      </li><br />
      <li className="nav-item">
        <Link to="/projects">
          Project Tab
        </Link>
      </li><br />
      <li className="nav-item">
        <Link to="/graph">
          Graph View
        </Link>
      </li>
    </ul>
    </nav >

  );
}

export default NavBar;
