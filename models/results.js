const { Schema, model } = require("mongoose");
const handleSaveErrors = require("../middlewares/handleSaveErrors");

const resultsSchema = new Schema(
  {
    userAnswer: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

resultsSchema.post("save", handleSaveErrors);

const Results = model("results", resultsSchema);

module.exports = {
  Results,
};
