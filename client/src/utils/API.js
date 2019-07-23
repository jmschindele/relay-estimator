
import axios from "axios";

const API = {
  // Gets all users
  getUsers: function() {
    return axios.get("/api/user");
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/user/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/user/", userData);
  },
  
  // gets a single project
  getProject: function(id) {
    return axios.get("/api/project/" + id)
  },
  
  //gets all projects
  getProjects: function(id) {
    return axios.get("/api/user/"+ id + "/project/")
  },

  // Deletes the project with the given id
  deleteProject: function(id) {
    return axios.delete("/api/project/" + id);
  },
  // Saves a project to the database
  createProject: function(uid, projectData) {
    return axios.post("/api/user/"+uid+"/project/", projectData);
  },

  //get list of tasks for specific project
  getTasks: function(id) {
    return axios.get("/api/project/"+ id +"/task")
  },
  // Get specific task
  getTasksWhere: function(id) {
    return axios.get("/api/task/" + id);
  },
  // Deletes the task with the given id
  deleteTask: function(id) {
    return axios.delete("/api/task/" + id);
  },

  //update a task
  updateTask: function(id, taskData) {
    return axios.put("/api/task/" + id, taskData);
  },

  //create a new task
  createTask: function(id, taskData) {
    return axios.post("/api/project/"+ id +"/task/", taskData)
  }

};

export default API;


