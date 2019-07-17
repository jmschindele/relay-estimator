const db = require("../models");

// Defining methods for the userController
module.exports = {
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  where: function(req, res){
    db.User
      .where({'uid': req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  create: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // whereProject: function(req, res) {
  //     db.User
  //       .where({'uid': req.params.id,
  //       'project.projectName' : req.params.projectName})
  //       .then(dbModel => {
  //         let projectTasks = [];
  //         for (let i = 0; i < dbModel[0].project.length; i++) {
  //           console.log(dbModel[0].project[i].projectName)
  //           if (dbModel[0].project[i].projectName === req.params.projectName) {
  //             projectTasks = dbModel[0].project[i].projectInfo
  //           }
  //         }
  //         return res.json(projectTasks)})
        
  //       .catch(err => res.status(422).json(err))
  //   },

  // updateProject: function(req, res) {
  //   console.log(req.body)
  //   db.User
  //     .findOneAndUpdate({'uid': req.params.uid,
  //                         'project[0].projectInfo': req.params.projectName},
  //                         req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};
// update: function(req, res) {
//   db.User
//     .findOneAndUpdate({ _id: req.params.id }, req.body)
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));
// },

