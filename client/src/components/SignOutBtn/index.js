import React, { Component } from 'react';
import firebase from "../../config/fbConfig";

class SignOutBtn extends Component {

handleSignOut = event => {
    event.preventDefault();
    firebase.auth().signOut();
    console.log('signed out')
}

render() {
    return(
        <>
    <button onClick={this.handleSignOut}> Sign Out </button>
    {localStorage.setItem("User", '')}
    </>)}
}
export default SignOutBtn;