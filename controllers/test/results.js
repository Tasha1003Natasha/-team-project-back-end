const { Test } = require("../../models/test");

const results = async (req, res) => {
  const userAnswer = req.body;
  const allCorrectArr = [];

  for (let i = 0; i < userAnswer.length; i++) {
    const checkAnswer = await Test.findOne({ _id: `${userAnswer[i]._id}` });
    // const arrayofQuestions = await Test.find([{ $match: { type: "tech" } }])
    //  { $match: { type: "tech" } },
    if (checkAnswer.rightAnswer === userAnswer[i].userAnswer) {
      allCorrectArr.push(userAnswer[i].userAnswer);
    }
  }

  // let correct = allCorrectArr.length;
  // let incorrect = 12 - correct;

  res.json({
    correct: allCorrectArr.length,
    incorrect: 12 - allCorrectArr.length,
  });
};

module.exports = results;
// todo find way  how to  get all data from DB by one request for line 8