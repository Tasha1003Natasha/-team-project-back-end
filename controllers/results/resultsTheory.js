// const { Test } = require("../../models/test");
const { Results } = require("../../models/results");

const resultsTheory = async (req, res) => {
  const { questionId, rightAnswer, type, userAnswer } = req.body;

  const resultFind = await Results.find({
    questionId,
    rightAnswer,
    type,
    userAnswer,
  });

  //   const total = resultFind.length;

  //   const correctAnswers =

  //   const correct  = () => {
  //     return Math.round((correctAnswers * 100) / total);
  // };
  //   const incorrect  = () => {
  //     return Math.round((100 - correct));
  // };

  //   const result = await Results.create({
  //     type,
  //   });

  //   res.status(201).json({
  //     id: result._id,
  //     type,
  // total,
  //   });
  res.status(201).json(resultFind);
};

module.exports = resultsTheory;
