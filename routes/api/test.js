const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/test");
const validateBody = require("../../middlewares/validateBody");
const authenticate = require("../../middlewares/authenticate");
const ctrlWrapper = require("../../helpers/ctrlWrapper");
const schemas = require("../../schemas");

router.get(
  "/theory",
  //   authenticate,
  // validateBody(schemas.getSchema),
  ctrlWrapper(ctrl.getTheoryQuestions)
);
router.get(
  "/tech",
  //   authenticate,
  // validateBody(schemas.getSchema),
  ctrlWrapper(ctrl.getTechQuestions)
);

module.exports = router;
