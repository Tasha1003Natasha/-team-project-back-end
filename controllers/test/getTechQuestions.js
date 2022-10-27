const { Test } = require("../../models/test");

const getTechQuestions = async (req, res) => {
  const result = await Test.aggregate([
    { $match: { type: "tech" } },
    { $sample: { size: 12 } },
  ]);

  res.status(201).json(result);
};

module.exports = getTechQuestions;
