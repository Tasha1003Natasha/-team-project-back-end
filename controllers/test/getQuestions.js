const { Test } = require("../../models/test");

const getQuestions = async (req, res) => {
  const result = await Test.aggregate([
    { $match: { type: "theory" } }, // filter the results
    { $sample: { size: 12 } }, // You want to get 12 docs
  ]);
  console.log(result);
  res.status(201).json(result);
};
getQuestions();
module.exports = getQuestions;
