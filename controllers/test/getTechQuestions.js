const { Test } = require("../../models/test");

const getTechQuestions = async (req, res) => {

  const { type } = req.params;

  const result = await Test.aggregate([
    // { $match: { type: "tech" } },
    { $match: { type } },
    { $sample: { size: 12 } },
  ]);
  // console.log(result);
  for (let i = 0; i < result.length; i++) {
    delete result[i].rightAnswer;
  }


  res.json(result);
};



module.exports = getTechQuestions;
