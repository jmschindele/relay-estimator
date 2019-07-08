import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Users from "./pages/Users";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Graph from "./pages/Graph";
import Projects from "./pages/Projects";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/users" component={Users} />
          {/* projects page */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/graph" component={Graph} />
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
