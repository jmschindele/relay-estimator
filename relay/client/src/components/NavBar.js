import React from "react";

function NavBar() {
  return (
    <ul className="nav nav-pills nav-justified">
      <li className="nav-item">
        <a className="nav-link active" href="#">
          Relay Estimates
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Sign In
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Register
        </a>
      </li>
    </ul>
  );
}

export default NavBar;
