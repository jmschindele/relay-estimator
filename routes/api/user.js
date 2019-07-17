const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/user/:id"
router
  .route("/:id")
  // .where(userController.where)
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

  // router
  // .route("/:uid/:projectName")
  // .get(userController.whereProject)
  // .post(userController.updateProject)


module.exports = router;

