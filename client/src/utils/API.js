import axios from "axios";

const API = {
  // Gets all books
  getUsers: function() {
    return axios.get("/api/user");
  },
  // Gets the book with the given id
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },
  // Deletes the book with the given id
  deleteUser: function(id) {
    return axios.delete("/api/user/" + id);
  },
  // Saves a book to the database
  saveUser: function(userData) {
    return axios.post("/api/user", userData);
  },

  getProjects: function(userId) {
    return axios.get("/api/"+ userId )
  },

  getProject: function(uid, projectName) {
    return axios.get('/api/' + uid + '/' + projectName)
  },

  saveTask: function(uid, projectName, userData) {
    return axios.post('/api/' + uid + '/' + projectName + '/' + userData)
  }
};

export default API;
