const { Test } = require("../../models/test");

const results = async (req, res) => {
  const userAnswer = req.body;
  // const allCorrectArr = [];

  for (let i = 0; i < userAnswer.length; i++) {
    const result = await Test.find().where({
      _id: `${userAnswer[i]._id}`,
      rightAnswer: `${userAnswer[i].userAnswer}`,
    });
    console.log(result);
    return result;
  }

  // User.find().where("_id").in(followedIds);

  // const checkAnswer = await (

  // const arrayofQuestions = await Test.find([{ $match: { type: "tech" } }])
  //  { $match: { type: "tech" } },
  //////////////////////////////////////////////

  //   if (checkAnswer.rightAnswer === userAnswer[i].userAnswer) {
  //     allCorrectArr.push(userAnswer[i].userAnswer);
  //   }
  // }
  //////////////////////////////////////
  // let correct = allCorrectArr.length;
  // let incorrect = 12 - correct;

  res.json({ rusult });
};

module.exports = results;
// todo find way  how to  get all data from DB by one request for line 8
