import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import NoMatch from "./pages/NoMatch";

class App extends React.Component {
  state = {
    highestScore: 0
  };
  render() {
    return (
      <div className="App">
        <Router>
          <div>
        
        <Switch>
          <Route exact path="/" component={NavBar} />
          <Route exact path="/logIn" component={NavBar} />
          <Route exact path="/logIn/:id" component={NavBar} />
          <Route component={NoMatch} />
        </Switch>
        </div>
        </Router>
        <Jumbotron />
      </div>
    );
  }
}

export default App;
