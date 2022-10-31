const { Test } = require("../../models/test");

const getTheoryQuestions = async (req, res) => {
  const result = await Test.aggregate([
    { $match: { type: "theory" } },
    { $sample: { size: 12 } },
  ]);
  for (let i = 0; i < result.length; i++) {
    delete result[i].rightAnswer;
  }
  res.status(201).json(result);
};

module.exports = getTheoryQuestions;
