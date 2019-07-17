import React, { Component } from "react";
import firebase from "../../config/fbConfig";
import "./style.css";

class SignOutBtn extends Component {
  handleSignOut = event => {
    event.preventDefault();
    firebase.auth().signOut().then(()=> console.log('signed out'));
  };

  render() {
    return (
      <>
        <button className="btn btn-warning" onClick={this.handleSignOut}>
          Sign Out
        </button>
        {localStorage.setItem("User", "")}
      </>
    );
  }
}
export default SignOutBtn;
