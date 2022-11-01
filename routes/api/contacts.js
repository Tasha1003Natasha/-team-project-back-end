const express = require("express");

const ctrl = require("../../controllers/contacts");
const ctrlWrapper = require("../../helpers/ctrlWrapper");
// const schemas = require("../../schemas");

const router = express.Router();

router.get("/register", ctrlWrapper(controllers.getContacts));

module.exports = router;
