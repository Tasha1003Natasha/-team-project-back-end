const express = require("express");

const ctrl = require("../../controllers/test");
const { ctrlWrapper } = require("../../helpers");

const router = express.Router();

router.get("/test", ctrlWrapper(ctrl.getQuestions));

module.exports = router;
