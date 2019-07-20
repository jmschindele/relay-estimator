const router = require("express").Router();
const projectController = require("../../controllers/projectController");
const taskController = require("../../controllers/taskController")
// Matches with "/api/users/:uid/projects"
router.route("/:uid/projects")
  .get(projectController.getPopulated)
  .post(projectController.create);

// Matches with "/api/project/:id"
router
  .route("/:id")
  // .getPopulated(projectController.getPopulated)
  .get(projectController.findById)
  .put(projectController.update)
  .delete(projectController.remove);

  // Matches with "/api/project/:id/task/"
router
  .route("/:id/task/")
  .get(projectController.getPopulated)
  .put(projectController.update)
  .post(taskController.create)

module.exports = router;

