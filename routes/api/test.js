const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/test");
const { ctrlWrapper } = require("../../helpers");
const { schemas } = require("../../models/test");

router.get("/", ctrlWrapper(ctrl.getQuestions));
// router.get("/tech", ctrlWrapper(ctrl.getQuestions(tech)));

module.exports = router;
