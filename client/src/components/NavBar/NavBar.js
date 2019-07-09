import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav nav-pills nav-justified">
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Sign In
          </Link>
        </li>
        <br />
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Sign Up
          </Link>
        </li>
        <br />
        <li className="nav-item">
          <Link className="nav-link" to="/projects">
            My Projects
          </Link>
        </li>
        <br />
        <li className="nav-item">
          <Link className="nav-link" to="/graph">
            Graph View
          </Link>
        </li>
        <br />
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home/About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
