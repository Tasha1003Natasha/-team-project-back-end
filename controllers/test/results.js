const { Test } = require("../../models/test");

const results = async (req, res) => {
  const userAnswer = req.body;
  const allCorrectArr = [];

  for (let i = 0; i < userAnswer.length; i++) {
    const checkAnswer = await Test.findOne({ _id: `${userAnswer[i]._id}` });
    if (checkAnswer.rightAnswer === userAnswer[i].userAnswer) {
      allCorrectArr.push(userAnswer[i].userAnswer);
    }
  }

  let correct = allCorrectArr.length;
  let incorrect = 12 - correct;

  res.json({
    correct: correct,
    incorrect: incorrect,
  });
};

module.exports = results;
