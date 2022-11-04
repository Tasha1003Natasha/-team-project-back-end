const { Test } = require("../../models/test");

const results = async (req, res) => {
  const idAnswers = req.body.map(({ _id }) => _id);

  const questionsArr = await Test.find({ _id: { $in: idAnswers } });

  const correct = req.body.filter(({ userAnswer, _id }) => {
    const question = questionsArr.find((item) => String(item._id) === _id);

    return question.rightAnswer === userAnswer;
  }).length;

  res.json({
    correct,
    incorrect: 12 - correct,
  });
};

module.exports = results;

/////////////////////
