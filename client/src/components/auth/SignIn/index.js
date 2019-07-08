import React, { Component } from "react";
import "./style.css";
import firebase from "../../../config/fbConfig";

class SignIn extends Component {
  // Setting the component's initial state
  state = {
    email: "",
    password: ""
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
    if (!this.state.email || !this.state.password) {
      alert("Username and Password Required");
    } else if (this.state.password.length < 6) {
      alert(
        `Choose a more secure password}`
      );
    } else {
      alert(`Login successful`);
      let email = this.state.email;
      let password = this.state.password;
      firebase.auth().signInWithEmailAndPassword(email, password)
    }

    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    
    
    
    const {
      email,
      password
    } = this.state;

    const isInvalid =
      password === '' ||
      password.length < 6 ||
      email === '';

    
    
    return (
      <div className="form-container mx-auto">
        <h1 className='text-center' >Sign In</h1>
        <form className="form">
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
          <button onClick={this.handleSignInSubmit} disabled={isInvalid} className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default SignIn;
