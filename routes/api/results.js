const express = require("express");
const router = express.Router();
const validateBody = require("../../middlewares/validateBody");
const ctrl = require("../../controllers/results/results");
const ctrlWrapper = require("../../helpers/ctrlWrapper");
const schemas = require("../../schemas");

router.post(
  "/results",
  validateBody(schemas.resultsSchema),
  ctrlWrapper(ctrl.results)
);

module.exports = router;
