import React from "react";
// import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// import NavBar from "./components/NavBar/NavBar";
// import Jumbotron from "./components/Jumbotron/Jumbotron";
import Users from "./pages/Users";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Chart from "./pages/Graph.js";
import Projects from "./pages/Projects";
import Register from "./pages/Register";
// import firebase from "./config/fbConfig"


function App() {


//   var user = firebase.auth().currentUser;
  
//   if (user != null) {
//   var name, email, photoUrl, uid, emailVerified;
//   name = user.displayName;
//   email = user.email;
//   photoUrl = user.photoURL;
//   emailVerified = user.emailVerified;
//   uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
//                    // this value to authenticate with your backend server, if
//                    // you have one. Use User.getToken() instead.
// }
//  console.log(`user: ${user} name: ${name}`)
  return (
    <Router>
      {/* {console.log("current user: " + firebase.auth().currentUser)} */}
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          {/* copy of projects \/ */}
          {/* <Route exact path="/users" component={Users} />
          projects page */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route path="/project" component={Projects} />
          <Route path="/graph" component={Chart} />
          <Route path="/users" component={Users} />
          {/* display estimates */}
          <Route component={NoMatch} />
        </Switch>        
      </div>
    </Router>
  );
}

export default App;
