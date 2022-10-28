const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/results");
const ctrlWrapper = require("../../helpers/ctrlWrapper");

router.post("/theory", ctrlWrapper(ctrl.resultsTheory));
router.post("/tech", ctrlWrapper(ctrl.resultsTech));

module.exports = router;
