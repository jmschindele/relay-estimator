import React, { Component } from "react";
import { Row, Container } from "../../Grid";
import "./style.css";
import firebase from "../../../config/fbConfig";
import { Link } from "react-router-dom";
// import { Link, withRouter } from "react-router-dom";

class SignIn extends Component {


  // Setting the component's initial state
  state = {
    email: "",
    password: "",
    emailRejected: '',
    passwordRejected: ''
  };
  // state = { 
  //   email: "test@test.com",
  //   password: "test123"
  // }

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
    if (!this.state.email) {
      this.setState({
        emailRejected: 'Email required'
      })
    } 
    if (!this.state.password) {
      this.setState({
        passwordRejected: 'Password required'
      })
    } else {
      try {
        //making async call to firebase and waiting for user confirmation
        await firebase
          .auth()
          .signInWithEmailAndPassword(this.state.email, this.state.password);
        this.props.userHasAuthenticated(true);
        this.props.history.push("/projects");
      } catch (e) {
        console.log(e.message);
      }
    }


  };

  render() {

    return (
      <Container>
        <Row>
          <div className="form-container-2 mx-auto">
            <h1 className="sign-in-header">Sign In</h1>
            <form className="form">
              <input
                autoFocus
                className="form-control"
                value={this.state.email}
                // value='test@test.com'
                name="email"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Email/Username"
              />
              <small className='form-small' id='email-small'>{this.state.emailRejected}</small>
              <input
                className="form-control"
                value={this.state.password}
                // value='test123'
                name="password"
                onChange={this.handleInputChange}
                type="password"
                placeholder="Password"
              />
              <small className='form-small' id='password-small'>{this.state.passwordRejected}</small>
              <button
                onClick={this.handleSignInSubmit}
                // disabled={isInvalid}
                className="sign-in-btn"
              >
                Sign In
              </button>
              <Link to='/register'>
                <span className='register-link'>New here?</span>
              </Link>
            </form>
          </div>
        </Row>
      </Container>
    );
  }
}

export default SignIn;
