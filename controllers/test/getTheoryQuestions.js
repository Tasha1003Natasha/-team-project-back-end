const { Test } = require("../../models/test");

const getTheoryQuestions = async (req, res) => {
  const result = await Test.aggregate([
    { $match: { type: "theory" } },
    { $sample: { size: 12 } },
  ]);
  // console.log(res);
  res.status(201).json(result);
};

module.exports = getTheoryQuestions;
