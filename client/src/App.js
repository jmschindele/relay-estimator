
import React, { Component } from 'react';
import "./App.css";

import firebase from "./config/fbConfig"

//starting tutorial experiment below this line
import { Col, Row, Container } from "./components/Grid";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import Routes from "./Routes";
// function App() {
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      isAuthenticating: true
    };
  }

  async componentDidMount() {
    try {
      firebase.auth().currentUser
        ? this.userHasAuthenticated(true)
        : console.log("not signed in");
    } catch (e) {
      console.log(e);
    }

    this.setState({ isAuthenticating: false });
  }

  userHasAuthenticated = autheticated => {
    this.setState({ isAuthenticated: autheticated });
  };

  handleLogout = async event => {
    console.log("before logging out: ", firebase.auth().currentUser);
    await firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("after logging out: ", firebase.auth().getUser);
      });
    this.userHasAuthenticated(false);
    this.props.history.push("/signin");
  };

  render() {
    // <>
    const childProps = {
      isAutheticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated,
      userId: firebase.auth().currentUser ? firebase.auth().currentUser.uid : null
    };
    return (
      !this.state.isAutheticating && (
        <Container fluid>
          <Navbar className="navbar" collapseOnSelect>
            <Link className="nav-link" to="/">
              Home{" "}
            </Link>

            <Link className="nav-link" to="/estimate">
              Graph/Estimate{" "}
            </Link>

            <Link className="nav-link" to="/projects">
              Projects{" "}
            </Link>

            <Link className="nav-link" to="/tasks">
              Tasks{" "}
            </Link>

            <Nav>
              {this.state.isAuthenticated ? (
                <NavItem className="nav-link-2" onClick={this.handleLogout}>
                  Logout
                </NavItem>
              ) : (
                <>
                  <NavItem>
                    <Link className="nav-link-3" to="register">
                      Signup |
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link className="nav-link-4" to="signin">
                      Login
                    </Link>
                  </NavItem>
                </>
              )}
            </Nav>
          </Navbar>
          <Row>
            <Col size="md-12">
              <Routes childProps={childProps} />
              {/* <Jumbotron />
        <SignOutBtn /> */}
            </Col>
          </Row>
        </Container>
      )
    );
  }
}

export default withRouter(App);
