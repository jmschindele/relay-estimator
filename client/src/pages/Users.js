import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

class Users extends Component {
  state = {
    Users: []
  };

  componentDidMount() {
    this.loadUser();
  }

  loadUser = () => {
    
    API.getUsers()
      .then(res => {
        console.log(res.data[0]);
        this.setState({
          Users: [res.data[0]]
        });
        // this.setState({ users: res.data})
      })
      .catch(err => console.log(err));
  };

  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            {/* <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn> */}
            {/* </form> */}

            {this.state.Users.length ? (
              <List>
                {this.state.Users.map(Users => (
                  <ListItem key={Users._id}>
                    <strong>
                      {`
                        ${Users.userName}
                        ${Users.project[0].projectName}
                        ${Users.project[0].projectInfo[0].task}
                        ${Users.project[0].projectInfo[0].hours}
                        ${Users.project[0].projectInfo[0].rate}
                      `}
                    </strong>
                    {/* <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Users;
