const express = require("express");
const { ctrlWrapper } = require("../../helpers");
const controllers = require("../../controllers/auth");
const { validateBody } = require("../../middlewares");

const router = express.Router();
const schemas = require("../../schemas");

// signup
router.post(
  "/register",
  validateBody(schemas.registerSchema),
  ctrlWrapper(controllers.registerUser)
);

// // signin
router.post(
  "/login",
  validateBody(schemas.loginSchema),
  ctrlWrapper(controllers.loginUser)
);

// router.get("/users/current", authenticate, ctrlWrapper(current));

// router.get("/users/logout", authenticate, ctrlWrapper(logout));

module.exports = router;
