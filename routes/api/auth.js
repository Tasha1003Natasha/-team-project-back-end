const express = require("express");
const ctrlWrapper = require("../../helpers/ctrlWrapper");
const controllers = require("../../controllers/auth");
const validateBody = require("../../middlewares/validateBody");
const schemas = require("../../schemas");
const authenticate = require("../../middlewares/authenticate");
const router = express.Router();

// signup
router.post(
  "/register",
  validateBody(schemas.registerSchema),
  ctrlWrapper(controllers.registerUser)
);

//  signin
router.post(
  "/login",
  validateBody(schemas.loginSchema),
  ctrlWrapper(controllers.loginUser)
);

//  logout
router.post("/logout", authenticate, ctrlWrapper(controllers.logoutUser));

// Mail for header
router.get("/current", authenticate, ctrlWrapper(controllers.current));

//  Endpoint for receiving user information
router.post("/refresh", authenticate, ctrlWrapper(controllers.refreshToken));

module.exports = router;
