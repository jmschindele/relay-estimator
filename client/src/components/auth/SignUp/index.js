import React, { Component } from "react";
import "./style2.css";
import firebase from "../../../config/fbConfig";

class SignUp extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleSignInSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (
      !this.state.email ||
      !this.state.password ||
      !this.state.firstName ||
      !this.state.lastName ||
      !this.state.confirmPassword
    ) {
      alert("All fields required");
    } else if (this.state.password.length < 6) {
      alert(`Choose a more secure password}`);
    } else if (this.state.password !== this.state.confirmPassword) {
      alert("passwords do not match");
    } else {
      let email = this.state.email;
      let password = this.state.password;
      console.log(`user created:
      email: ${email} password: ${password}`);
      firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop

    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    } = this.state;

    const isInvalid =
      password !== confirmPassword ||
      password === "" ||
      password.length < 6 ||
      email === "" ||
      firstName === "" ||
      lastName === "";

    return (
      <div className="form-container mx-auto">
        <h1 className="text-center">Sign Up</h1>
        <form className="form">
          <input
            className="form-control"
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            className="form-control"
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <input
            className="form-control"
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Email/Username"
          />
          <input
            className="form-control"
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          <input
            className="form-control"
            value={this.state.confirmPassword}
            name="confirmPassword"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Confirm Password"
          />
          <button
            onClick={this.handleSignInSubmit}
            disabled={isInvalid}
            className="btn"
          >
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default SignUp;
