const { Test } = require("../../models/test");

const getQuestions = async (req, res) => {
  const result = await Test.aggregate([
    { $match: { type: "tech" } },
    { $sample: { size: 12 } },
  ]);
  // console.log(res);
  res.status(201).json(result);
  // return result;
};
// getQuestions();
module.exports = getQuestions;
