const { Schema, model } = require("mongoose");
const Joi = require("joi");
const handleSaveErrors = require("../middlewares/handleSaveErrors");

const testSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name"],
    },
    email: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

testSchema.post("save", handleSaveErrors);

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
});

const schemas = {
  addSchema,
};

const Test = model("test", testSchema);

module.exports = {
  Test,
  schemas,
};
