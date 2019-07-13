const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(userController.where)
  .put(userController.update)
  .delete(userController.remove);

  router
  .route("/:id/:projectName")
  .get(userController.findAll)

module.exports = router;

