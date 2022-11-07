const { Test } = require("../../models/test");

const getQuestions = async (req, res) => {
  const { type } = req.params;
  const result = await Test.aggregate([
    { $match: { type } },
    { $sample: { size: 12 } },
    { $project: { _id: 1, question: 1, answers: 1, type: 1 } },
  ]);

  res.json(result);
};

module.exports = getQuestions;
