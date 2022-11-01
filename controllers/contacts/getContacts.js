const { Contacts } = require("../../models/contacts");

const getContacts = async (req, res) => {
  const contacts = await Contacts.find({}, "-createdAt -updatedAt");
  res.status(201).json(contacts);
};

module.exports = getContacts;
