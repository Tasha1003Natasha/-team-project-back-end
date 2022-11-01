const express = require("express");

const ctrl = require("../../controllers/contacts");
const ctrlWrapper = require("../../helpers/ctrlWrapper");

const router = express.Router();

router.get("/contacts", ctrlWrapper(ctrl.getContacts));

module.exports = router;
