const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/test");
const ctrlWrapper = require("../../helpers/ctrlWrapper");
// const { schemas } = require("../../models/test");

router.get("/theory", ctrlWrapper(ctrl.resultsTheory));
router.get("/tech", ctrlWrapper(ctrl.resultsTech));

module.exports = router;
