const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/test");
const { ctrlWrapper } = require("../../helpers");
const { schemas } = require("../../models/test");

router.get("/", ctrlWrapper(ctrl.getQuestions));

module.exports = router;
