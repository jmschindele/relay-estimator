const router = require("express").Router();
const userRoutes = require("./user");
const taskRoutes = require("./task");
const projectRoutes = require("./project")

// User routes
router.use("/user", userRoutes);
// Task Routes
router.use("/task", taskRoutes);
//Project Routes
router.use("/project", projectRoutes);

module.exports = router;
