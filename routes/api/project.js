const router = require("express").Router();
const taskController = require("../../controllers/projectController");

// Matches with "/api/project"
router.route("/")
  .get(taskController.findAll)
  .post(taskController.create);

// Matches with "/api/project/:id"
router
  .route("/:id")
  .get(taskController.findById)
  .put(taskController.update)
  .delete(taskController.remove);

module.exports = router;

