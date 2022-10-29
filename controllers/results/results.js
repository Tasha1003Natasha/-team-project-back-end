const { Test } = require("../../models/test");
// const { Results } = require("../../models/results");

const results = async (req, res) => {
  console.log(1111111111111);
  // const result = await Test.find();
  console.log(req);

  // const userAnswer = [
  //   { rightAnswer: "Waterfall", _id: "635937f59d8216968f25ff83" },
  //   {
  //     rightAnswer: "All options are incorrect",
  //     _id: "635937f59d8216968f25ff85",
  //   },
  //   { rightAnswer: "Test case", _id: "635937f59d8216968f25ff90" },
  // ];
  const userAnswer = req.body;
  const allCorrectArr = [];

  for (let i = 0; i < userAnswer.length; i++) {
    const checkAnswer = await Test.findOne({ _id: `${userAnswer[i]._id}` });
    console.log(userAnswer[i]);
    if (checkAnswer.rightAnswer === userAnswer[i].userAnswer) {
      allCorrectArr.push(userAnswer[i].userAnswer);
    }
  }

  let correct = allCorrectArr.length;
  let inccorect = 12 - correct;
  console.log(inccorect);
  console.log(correct);

  res.json({
    correct: correct,
    inccorect: inccorect,
  });
};

// res.status(201).json(result);
module.exports = results;
