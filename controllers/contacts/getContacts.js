const { Contacts } = require("../../models/contacts");

const getContacts = async (req, res) => {
  const contacts = await Contacts.find({}, "-createdAt -updatedAt");
  // res.status(201).json(contacts);
  console.log(contacts);
};

getContacts();

module.exports = getContacts;
