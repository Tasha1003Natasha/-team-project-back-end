const express = require("express");
const { ctrlWrapper } = require("../../helpers");
const controllers = require("../../controllers/auth");
const {
  validateBody,
  authenticate
} = require("../../middlewares");

const schemas = require("../../schemas");
const router = express.Router();

// signup
router.post("/register", validateBody(schemas.registerSchema), ctrlWrapper(controllers.registerUser));

//  signin
router.post("/login", validateBody(schemas.loginSchema), ctrlWrapper(controllers.loginUser));

// router.get("/current", authenticate, ctrlWrapper(current));

//  logout
router.post("/logout", authenticate, ctrlWrapper(controllers.logoutUser));

module.exports = router;
