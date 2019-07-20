const db = require("../models");

//defining methods for the taskController

module.exports = {
  findAll: function(req, res) {
    db.Project.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Project.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  where: function(req, res) {
    db.Project.where({ uid: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getPopulated: function(req, res) {
    db.Project.findById(req.params.id)
    .populate('Tasks')
    .then(dbModel => res.json(dbModel))
  },
  create: function(req, res) {
    db.Project.create(req.body)
      .then(dbModel => {
        return db.User.findOneAndUpdate(
          { uid: req.params.uid},
          { $push: { project: dbModel._id } },
          { new: true }
        );
      }
      )
      .then(function(dbModel){
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Project.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Project.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
