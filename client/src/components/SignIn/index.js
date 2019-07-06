import React, { Component } from "react";
import "./style.css";

class SignIn extends Component {
  // Setting the component's initial state
  state = {
    userName: "",
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
    if (!this.state.userName || !this.state.password) {
      alert("Username and Password Required");
    } else if (this.state.password.length < 6) {
      alert(
        `Choose a more secure password}`
      );
    } else {
      alert(`Login successful}`);
    }

    this.setState({
      userName: "",
      password: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div className="form-container mx-auto">
        <h1 className='text-center' >Sign In</h1>
        <form className="form">
          <input
            className="form-control"
            value={this.state.userName}
            name="userName"
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
          <button onClick={this.handleSignInSubmit} className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default SignIn;
