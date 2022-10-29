const { Test } = require("../../models/test");
// const { Results } = require("../../models/results");

const results = async (req, res) => {
  // const { userAnswer } = req.body;

  //   const result = await Model.aggregate().
  //  search({
  //    text: {
  //      query: 'baseball',
  //      path: 'plot'
  //    }
  //  })

  const result = await Test.aggregate().sort({ type: "theory" });
  console.log([result]);

  // const allRightAnswer = Object.entries(result[0]).forEach(([key, value]) => {
  //   if (key === "rightAnswer") {
  //     console.log(`${value}`);
  //   }

  // console.log("rightAnswer": `${value}`);
  // });

  // const allRightAnswer = Object.keys(result[0]);
  // console.log(allRightAnswer);

  // const resultFind = await Test.find({
  //   rightAnswer,
  //   type,
  // });

  //   const total = resultFind.length;

  //   const correctAnswers =

  //   const correct  = () => {
  //     return Math.round((correctAnswers * 100% ) / total);
  // };
  //   const incorrect  = () => {
  //     return Math.round((100% - correct));
  // };

  //   const result = await Results.create({
  //     type,
  //   });

  //   res.status(201).json({
  //     id: result._id,
  //     type,
  // total,
  //   });
  // res.status(201);
  // res.status(201).json(result);
};

results();

module.exports = results;
