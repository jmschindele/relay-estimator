// import axios from "axios";

// const API = {
//   // Gets all books
//   getUsers: function() {
//     return axios.get("/api/user");
//   },
//   // Gets the book with the given id
//   getUser: function(id) {
//     return axios.get("/api/user/" + id);
//   },
//   // Deletes the book with the given id
//   deleteUser: function(id) {
//     return axios.delete("/api/user/" + id);
//   },
//   // Saves a book to the database
//   saveUser: function(userData) {
//     return axios.post("/api/user/", userData);
//   },

//   saveTask: function(uid, projectName, projectInfo) {
//     console.log(`uid = ${uid}
//     projectName = ${projectName}
//     projectInfo = ${projectInfo}`)
//     return axios.post('/api/user/' + uid + '/' + projectName, projectInfo)
//   },
// //  //get all tasks to display for a given project
// //   getTasks: function(uid, projectName) {
// //     return axios.get("/api/user/"+ uid +"/" + projectName);
// //   },

//   getProjects: function(userId) {
//     return axios.get("/api/user/"+ userId )
//   },

//   getProject: function(uid, projectName) {
//     return axios.get('/api/user/' + uid + '/' + projectName)
//   },


//   updateTask: function(uid, projectName, userData) {
//     return axios.put('/api/user/' + uid + '/' + projectName, userData)
//   },

//   getTasks: function(userID, projectName) {
//     return axios.get('/api/user/' + userID + '/' + projectName)
//   }
// };

// export default API;


// experimenting with redone backend 


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
    return axios.post("/api/user/", userData);
  },

  getProjects: function() {
    return axios.get("/api/project")
  },
  // Gets the book with the given id
  getProject: function(id) {
    return axios.get("/api/Project/" + id);
  },
  // Deletes the book with the given id
  deleteProject: function(id) {
    return axios.delete("/api/Project/" + id);
  },
  // Saves a book to the database
  saveProject: function(projectData) {
    return axios.post("/api/Project/", projectData);
  },

  getTasks: function() {
    return axios.get("/api/task")
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
  saveTask: function(taskData) {
    return axios.post("/api/task/", taskData);
  },

};

export default API;
