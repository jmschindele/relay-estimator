import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Users from "./pages/Users"
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={Users} />
          {/* projects page */}
          <Route exact path="/projects/:id" component={Jumbotron} />
          {/* display estimates */}
          <Route exact path="/projects/:id/:projectID" component={Jumbotron} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
