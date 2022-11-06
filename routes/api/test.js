const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/test");
const validateBody = require("../../middlewares/validateBody");
const authenticate = require("../../middlewares/authenticate");
const ctrlWrapper = require("../../helpers/ctrlWrapper");
const schemas = require("../../schemas");

router.get("/:type", authenticate, ctrlWrapper(ctrl.getQuestions));

router.post(
  "/results",
  validateBody(schemas.resultsSchema),
  ctrlWrapper(ctrl.results)
);

module.exports = router;


