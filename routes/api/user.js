const router = require("express").Router();
const userController = require("../../controllers/userController");
const projectController = require('../../controllers/projectController');

// Matches with "/api/user"
router.route("/")
  // .get(userController.findAll)
  .post(userController.create)
  // .get(userController.getPopulated)

// Matches with "/api/user/:id"
router
  .route("/:id")
  // .where(userController.where)
  // .getPopulated(userController.getPopulated)
  .put(userController.update)
  .delete(userController.remove);
  
  
  //Matches with "/api/user/:uid/project"
  router.route("/:uid/project")
  .post(projectController.create)
  .get(userController.getPopulated)
  
  // router
  // .route("/project")
  // .get(userController.whereProject)
  // .post(userController.updateProject)

  // router
  // .route("/api/user/:uid/project/:projId/task/:taskid")
  

module.exports = router;

