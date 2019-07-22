import React, { Component } from "react";
import "./App.css";

import firebase from "./config/fbConfig";

//starting tutorial experiment below this line
import { Col, Row} from "./components/Grid";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { Link, withRouter} from "react-router-dom";
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

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          isAuthenticating: false,
          isAuthenticated: true})
      }
    })


    this.setState({ isAuthenticating: false });
  }

  userHasAuthenticated = autheticated => {
    this.setState({ isAuthenticated: autheticated });
  };

  handleLogout = async event => {
    await firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("sign out successful");
      });
    this.userHasAuthenticated(false);
    this.props.history.push("/signin");
  };

  render() {
    // <>
    const childProps = {
      isAutheticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated,
      userId: firebase.auth().currentUser
        ? firebase.auth().currentUser.uid
        : null
    };
    return (
      !this.state.isAutheticating && (
        // <Container fluid>
        <>
          <Navbar className="navbar navbar-fluid" collapseOnSelect>
            <div className="container">
              <Link className="nav-link" to="/">
                <img src='/relay-logo.png' alt='logo' class='header-logo' />
                RELAY <span id='title-sub'>Estimate</span>
              </Link>

              <Nav className="pull-right">
                {this.state.isAuthenticated ? (
                  <>

                    <Link className="nav-link-3" to="/projects">
                      Projects / 
                    </Link>

                    <NavItem className="nav-link-4" onClick={this.handleLogout}>
                      / Logout
                    </NavItem>
                  </>
                ) : (
                  <>
                    <NavItem>
                      <Link className="nav-link-3" to="signin">
                        Login / 
                      </Link>
                    </NavItem>
                    <NavItem>
                      <Link className="nav-link-4" to="register">
                        {`/ Sign Up`}
                      </Link>
                    </NavItem>
                  </>
                )}
              </Nav>
            </div>
          </Navbar>
          <Row>
            <Col size="md-12">
              <Routes childProps={childProps} />
              {/* <Jumbotron />
        <SignOutBtn /> */}
            </Col>
          </Row>
          </>
        // </Container>
      )
    );
  }
}

export default withRouter(App);
