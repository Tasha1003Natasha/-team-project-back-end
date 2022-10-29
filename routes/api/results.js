const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/results");
const ctrlWrapper = require("../../helpers/ctrlWrapper");

router.post("/results", ctrlWrapper(ctrl.results));


module.exports = router;
