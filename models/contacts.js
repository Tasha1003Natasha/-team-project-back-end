const { Schema, model } = require("mongoose");
const handleSaveErrors = require("../middlewares/handleSaveErrors");

const contactsSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
    },
    url: {
      type: String,
    },
    name: {
      type: String,
    },
    role: {
      type: String,
    },
    github: {
      type: String,
    },
    linkedin: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

contactsSchema.post("save", handleSaveErrors);

const Contacts = model("contacts", contactsSchema);

module.exports = {
  Contacts,
};
