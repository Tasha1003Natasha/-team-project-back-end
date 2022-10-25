const express = require("express");
const controllers = require("../../controllers/auth");
const { ctrlWrap, validateBody } = require("../../middlewares");
const router = express.Router();
const schemas = require("../../schemas");

// signup
router.post("/users/register", validateBody(schemas.registerSchema), ctrlWrap(controllers.registerUser));

// // signin
// router.post("/users/login", validateBody(loginSchema), ctrlWrapper(login));

// router.get("/users/current", authenticate, ctrlWrapper(current));

// router.get("/users/logout", authenticate, ctrlWrapper(logout));

module.exports = router;
