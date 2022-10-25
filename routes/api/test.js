const express = require("express");

const ctrl = require("../../controllers/test");
const { ctrlWrapper } = require("../../helpers");

const router = express.Router();

router.get("/test", ctrlWrapper(ctrl.getQuestions));
// const ctrl = require("../../controllers/test");

// const { ctrlWrapper } = require("../../helpers");

// const { validateBody } = require("../../middlewares");

// const { schemas } = require("../../models/test");

module.exports = router;
