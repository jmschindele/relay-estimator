import React, { Component } from "react";
import "./style2.css";
import firebase from "../../../config/fbConfig";
import API from "../../../utils/API"
class Register extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    firstNameReject: "",
    lastNameReject: "",
    emailReject: "",
    passwordReject: "",
    confirmPasswordReject: ""
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

    if (!this.state.email) {
      this.setState({
        emailReject: 'Email Address Required'
      })
    }
    if (!this.state.password) {
      this.setState({
        passwordReject: 'Password Required'
      })
    }
    if (!this.state.firstName) {
      this.setState({
        firstNameReject: 'This Field Required'
      })
    }
    if (!this.state.LastName) {
      this.setState({
        lastNameReject: 'This Field Required'
      })
    }
    if (!this.state.confirmPassword) {
      this.setState({
        confirmPasswordReject: 'Please Confirm Password'
      })
    }

      
     else if (this.state.password.length < 6) {
      this.setState({
        passwordReject: 'Password Must Be At Least 6 Characters'
      })
    } else if (this.state.password !== this.state.confirmPassword) {
      this.setState({
        confirmPasswordReject: "passwords do not match"});
    } else {
      try {
        //making async call to firebase and waiting for register
      await firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password).then(function(res,err){
        if (err) console.log('register err', err)
        API.saveUser({
          uid: res.user.uid
        })
      });
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

    // const {
    //   firstName,
    //   lastName,
    //   email,
    //   password,
    //   confirmPassword
    // } = this.state;

    // const isInvalid =
    //   password !== confirmPassword ||
    //   password === "" ||
    //   password.length < 6 ||
    //   email === "" ||
    //   firstName === "" ||
    //   lastName === "";

    return (
      <div className="form-container mx-auto">
        <h1 className="sign-up-header">Sign Up</h1>
        <form className="form">
          <input
            className="form-control"
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <small className='form-small'>{this.state.firstNameReject}</small>
          <input
            className="form-control"
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <small className='form-small'>{this.state.lastNameReject}</small>
          <input
            className="form-control"
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Email/Username"
          />
          <small className='form-small'>{this.state.emailReject}</small>
          <input
            className="form-control"
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
                    <small className='form-small'>{this.state.passwordReject}</small>
          <input
            className="form-control"
            value={this.state.confirmPassword}
            name="confirmPassword"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Confirm Password"
          />
                    <small className='form-small'>{this.state.confirmPasswordReject}</small>
          <button
            onClick={this.handleRegisterSubmit}
            // disabled={isInvalid}
            className="register-btn"
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
