// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// // import Jumbotron from "../components/Jumbotron";
// // import API from "../utils/API";
// import SignIn from "../../components/auth/SignIn";
// import firebase from "../../config/fbConfig";

// class Login extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: "",
//       password: ""
//     }
//   }

//   validateForm() {
//     return this.state.email.length > 0 && this.state.password.length > 0;
//   }

//   currentUser = firebase.auth().currentUser ;

//   handleSubmit = event => {
//     event.preventDefault();
//   }

//   componentDidMount() {
//    console.log("login page localstorage test : ",localStorage.getItem('User'))
//   }
  
//   render() {
//     return (
//       <Container fluid>
//         <Row>
//           <Col size="md-12">
//             <SignIn />
//           </Col>
//         </Row>
//         <Row>
//           <Col size="md-2">
//             <Link to="/">Home</Link>
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }

// export default Login;
