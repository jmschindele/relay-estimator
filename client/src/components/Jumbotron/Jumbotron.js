import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";

function Jumbotron() {
  return (
    <div className="container">
      <div className="jumbotron jumbotron-fluid">
        <h1 className="display-4">RELAY [Beta]</h1>
        <h2 className="lead">Welcome...</h2>

        <p className="about">
          RELAY [Beta] is a project estimator designed for freelance developers
          and designers in mind. It is simple to use and can be applied to any
          industry in which an estimation for a project/task/service is
          required. Users are able to setup/edit projects and specific tasks for
          each project, and provide cost estimations to potential clients.
        </p>

        <p className="about-2">
          Utlized: React, HTML5, CSS, React-Bootstrap, Javascript ES6, Node.js,
          MongoDB, Express, REST API's, ChartJS
        </p>

        {/* <Link className="link-name" to="/register">
          Sign Up |{" "}
        </Link>
        <Link className="link-name" to="/signin">
          Log In
        </Link> */}
      </div>
    </div>
  );
}

export default Jumbotron;
