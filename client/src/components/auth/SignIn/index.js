import React, { Component } from "react";
import { Row, Container } from "../../Grid";
import "./style.css";
import firebase from "../../../config/fbConfig";
import SignOutBtn from "../../SignOutBtn";

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

  handleSignInSubmit = async event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.email || !this.state.password) {
      alert("Username and Password Required");
    } else if (this.state.password.length < 6) {
      alert(`Choose a more secure password}`);
    } else {
      try {
        //making async call to firebase and waiting for user confirmation
        await firebase
          .auth()
          .signInWithEmailAndPassword(this.state.email, this.state.password);
        this.props.userHasAuthenticated(true);
        this.props.history.push("/");
        console.log("current user ", firebase.auth().currentUser.uid);
      } catch (e) {
        console.log(e.message);
      }
    }

    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop

    const { email, password } = this.state;

    const isInvalid = password === "" || password.length < 6 || email === "";

    return (
      <Container>
        <Row>
          <div className="form-container-2 mx-auto">
            <h1 className="text-center">Sign In</h1>
            <form className="form">
              <input
                autoFocus
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
              <button
                onClick={this.handleSignInSubmit}
                disabled={isInvalid}
                className="btn"
              >
                Sign In
              </button>
              <SignOutBtn />
            </form>
          </div>
        </Row>
      </Container>
    );
  }
}

export default SignIn;
