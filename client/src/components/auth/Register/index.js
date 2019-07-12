import React, { Component } from "react";
import "./style2.css";
import firebase from "../../../config/fbConfig";

class Register extends Component {
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

  handleRegisterSubmit = async event => {
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
      try {
        //making async call to firebase and waiting for register
      await firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password);
      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      this.props.history.push("/");
    } catch (e) {
      console.log(e.message);
      document.getElementById('register-fail').textContent = e.message;
    }
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
            onClick={this.handleRegisterSubmit}
            disabled={isInvalid}
            className="btn"
          >
            Register
          </button>
        </form>
        <p id='register-fail'></p>
      </div>
    );
  }
}

export default Register;
