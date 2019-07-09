import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">CodeName: RELAY [Beta]</h1>
        <h2 className="lead">Welcome...</h2>
        <p className="about">
          To your new favorite tool. If you're new to Freelance Design and/or
          Development, CodeName: Relay will be any easy to use, project
          estimator, designed for just for you. Manage project time and revenue,
          and give your clients something sexy to look at when the time comes to
          say "HEY! FUCK YOU, PAY ME!"
          <br />
        </p>
        <Link className="link-name" to="/register">
          Sign Up |{" "}
        </Link>
        <Link className="link-name" to="/login">
          Log In
        </Link>
      </div>
    </div>
  );
}

export default Jumbotron;
