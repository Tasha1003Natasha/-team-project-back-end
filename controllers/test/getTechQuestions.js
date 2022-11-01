const { Test } = require("../../models/test");

const getTechQuestions = async (req, res) => {
  const result = await Test.aggregate([
    { $match: { type: "tech" } },
    { $sample: { size: 12 } },
  ]);
  // console.log(result);
  for (let i = 0; i < result.length; i++) {
    delete result[i].rightAnswer;
  }


  res.status(201).json(result);
};



module.exports = getTechQuestions;
