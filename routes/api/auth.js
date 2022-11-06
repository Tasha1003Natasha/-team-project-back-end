const express = require("express");
const ctrlWrapper = require("../../helpers/ctrlWrapper");
const controllers = require("../../controllers/auth");
const validateBody = require("../../middlewares/validateBody");
const schemas = require("../../schemas");
const authenticate = require("../../middlewares/authenticate");
const passport = require("passport");
const router = express.Router();
require('../../google-stategy/google');

// const { BASE_URL } = process.env

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


router.get("/current", authenticate, ctrlWrapper(controllers.current));

// google
router.get('/google',
  passport.authenticate('google', {
    scope:
      ['email', 'profile']
  }
  ));



router.get('/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/failed',
  }),
  controllers.googleCallbackHandler
);




module.exports = router;
