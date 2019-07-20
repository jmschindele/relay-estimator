const db = require("../models");

//defining methods for the taskController

module.exports = {
  findAll: function(req, res) {
    db.Task.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Task.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  where: function(req, res) {
    db.Task.where({ uid: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // create: function(req, res) {
  //   db.Task
  //     .create(req.body)
  //     .then(dbModel => db.Project.findOneAndUpdate({}, { $push: { tasks: dbModel._id } }, { new: true }))
  //     .catch(err => res.status(422).json(err));
  // },
  create: function(req, res) {
    db.Task.create(req.body)
      .then(dbModel => {
        return db.Project.findByIdAndUpdate(
          req.params.id,
          { $push: { tasks: dbModel._id } },
          { new: true }
        );
        console.log(dbModel._id);
      })
      .then(function(dbModel) {
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Task.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Task.findById({ _id: 'ObjectId("' + req.params.id + '")' })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
