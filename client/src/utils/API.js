
import axios from "axios";

const API = {
  // Gets all books
  getUsers: function() {
    return axios.get("/api/user");
  },
  // Gets the book with the given id
  // getUser: function(id) {
  //   return axios.get("/api/user/" + id);
  // },
  // getPopulatedUser: function(id) {
  //   return axios.get("/api/user/" + id + "/project/")
  // },
  // Deletes the book with the given id
  deleteUser: function(id) {
    return axios.delete("/api/user/" + id);
  },
  // Saves a book to the database
  saveUser: function(userData) {
    return axios.post("/api/user/", userData);
  },
  
  // getProjects: function(id) {
  //   return axios.get("/api/project/" + id)
  // },
  getProject: function(id) {
    return axios.get("/api/project/" + id)
  },
  
  getProjects: function(id) {
    return axios.get("/api/user/"+ id + "/project/")
  },
  // Gets the book with the given id
  // getProject: function(id) {
  //   return axios.get("/api/Project/" + id);
  // },
  // Deletes the book with the given id
  deleteProject: function(id) {
    return axios.delete("/api/project/" + id);
  },
  // Saves a book to the database
  createProject: function(uid, projectData) {
  // saveProject: function(uid, projectData) {
    // return axios.post("/api/user/${uid}/project", projectData);
    return axios.post("/api/user/"+uid+"/project/", projectData);
  },

  getTasks: function(id) {
    return axios.get("/api/project/"+ id +"/task")
  },
  // Gets the book with the given id
  getTasksWhere: function(id) {
    return axios.get("/api/task/" + id);
  },
  // Deletes the book with the given id
  deleteTask: function(id) {
    return axios.delete("/api/task/" + id);
  },
  // Saves a book to the database
  // createTask: function(uid, id,taskData) {
  //   //id should be the _id of the parent project
  //   return axios.post("/api/user/"+uid+"/project/"+ id +"task/", taskData);
  // },
  createTask: function(id, taskData) {
    return axios.post("/api/project/"+ id +"/task/", taskData)
  }

};

export default API;


