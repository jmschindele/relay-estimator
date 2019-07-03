import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";

class App extends React.Component {
  state = {
    highestScore: 0
  };
  render() {
    return (
      <div className="App">
        <NavBar />
        <Jumbotron />
      </div>
    );
  }
}

export default App;
