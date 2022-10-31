const { Test } = require("../../models/test");

const getTechQuestions = async (req, res) => {
  const result = await Test.aggregate([
    { $match: { type: "tech" } },
    { $sample: { size: 12 } },
  ]);

  res.status(201).json(result);
};

// const rA = async (req, res) => {
//   const result = await Test.aggregate([{ $match: { type: "tech" } }]);
//   console.log(result);
// };
// rA();

// Object.entries(rA[0]).forEach(([rightAnswer, value]) => {
//   console.log(`${rightAnswer} ${value}`); // "a 5", "b 7", "c 9"
// });

module.exports = getTechQuestions;
