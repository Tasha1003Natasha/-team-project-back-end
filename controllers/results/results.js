const { Test } = require("../../models/test");
// const { Results } = require("../../models/results");

const results = async (req, res) => {
  // const {usersAnswer} =  req.body.usersAnswer,
  // console.log(usersAnswer);

  // const { usersAnswer, type } = req.body;
  // console.log(usersAnswer);

  const usersAllAnswer = await Test.find({ usersAnswer });
  console.log(usersAllAnswer);

  const results = await Test.aggregate().sort({ type: "theory" });
  console.log([results]);

  // const allRightAnswer = Object.entries(result[0]).forEach(([key, value]) => {
  //   if (key === "rightAnswer") {
  //     console.log(`${value}`);
  //   }
  // });

  // console.log("rightAnswer": `${value}`);
  // });

  const allRightAnswer = [];

  for (const result of results) {
    allRightAnswer.push(result.rightAnswer);
  }

  console.log(allRightAnswer);

  const incorrectAnswer = [];
  const allCorrect = [];

  for (let i = 0; i < usersAllAnswer.length; i++) {
    for (let j = 0; j < allRightAnswer.length; j++) {
      if (
        usersAllAnswer[i].rightAnswer !== allRightAnswer[j].rightAnswer &&
        usersAllAnswer[i]._id !== allRightAnswer[j]._id
      ) {
        return incorrectAnswer.push[i];
      } else if (
        usersAllAnswer[i].rightAnswer === allRightAnswer[j].rightAnswer &&
        usersAllAnswer[i]._id !== allRightAnswer[j]._id
      ) {
        return allCorrect.push[i];
      }
    }
  }

  // const resultFind = await Test.find({
  //   rightAnswer,
  //   type,
  // });

  //   const total = allRightAnswer.length;
  //   console.log(total);

  //   const correctAnswers = allCorrect.length;
  //   console.log(correctAnswers);

  //   const correct  = () => {
  //      return  Math.round((correctAnswers * 100 ) / total);
  // };

  //   const incorrect  = () => {
  //     return Math.round((100 - correct));
  // };

  //   const resultFront = await Results.create({
  //     type,
  //     total,
  //     correctAnswers,
  //     correct,
  //     incorrect,
  //   });

  //     res.status(201).json(resultFront);

  //   res.status(201).json({
  //     id: result._id,
  //     type,
  // total,
  //   });
  // res.status(201);
  // res.status(201).json(resultFront);
};

results();

module.exports = results;
