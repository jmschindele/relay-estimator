import React, { Component } from 'react';
import firebase from "../../config/fbConfig";

class CheckUser extends Component {

handleCheckUser = event => {
    event.preventDefault();
    var user = firebase.auth().currentUser;
    let name, email, photoUrl, uid, emailVerified;
    
    if (user != null) {
    //   name = this.user.displayName;
    //   email = this.user.email;
    //   photoUrl = this.user.photoURL;
    //   emailVerified = this.user.emailVerified;
      uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                       // this value to authenticate with your backend server, if
                       // you have one. Use User.getToken() instead.
    }
    console.log(`User: ${user.email}, Name: ${name}, Photo Url: ${photoUrl}, UID: ${uid}, Email: ${emailVerified}`)
}

render() {
    return(
    <button onClick={this.handleCheckUser}> Check User </button>

    )}
}
export default CheckUser;