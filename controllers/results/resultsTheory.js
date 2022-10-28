// const { Test } = require("../../models/test");
// const { Results } = require("../../models/results");

// const resultsTheory = async (req, res) => {
//   const { questionId, rightAnswer, type } = req.body;

//   //   const result = await Test.find({ questionId, rightAnswer, type });

//   const resultRes = await Results.create({
//     type,
//   });

//   res.status(201).json({
//     id: resultRes._id,
//     type,
//   });
// };

// module.exports = resultsTheory;
