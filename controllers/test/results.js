const { Test } = require("../../models/test");
// const { Results } = require("../../models/results");

const results = async (req, res) => {
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

module.exports = results;
