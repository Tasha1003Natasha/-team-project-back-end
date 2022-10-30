const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/test");
const ctrlWrapper = require("../../helpers/ctrlWrapper");
// const { schemas } = require("../../models/test");
const authenticate = require("../../middlewares/authenticate");

router.get("/theory", ctrlWrapper(ctrl.getTheoryQuestions));
router.get("/tech", ctrlWrapper(ctrl.getTechQuestions));

router.get("/:id", authenticate, ctrlWrapper(ctrl.getResultsTechQuestions));
router.get("/:id", authenticate, ctrlWrapper(ctrl.getResultsTheoryQuestions));

module.exports = router;


