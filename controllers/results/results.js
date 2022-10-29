const { Test } = require("../../models/test");
// const { Results } = require("../../models/results");

const results = async (req, res) => {
  const result = await Test.find();
  console.log(result);

  const usersAllAnswer = [
    { rightAnswer: "Waterfall", _id: "635937f59d8216968f25ff83" },
    {
      rightAnswer: "All options are incorrect",
      _id: "635937f59d8216968f25ff85",
    },
    { rightAnswer: "Test case", _id: "635937f59d8216968f25ff90" },
  ];

  const allCorrect = [];

  for (let i = 0; i < usersAllAnswer.length; i++) {
    const checkAnswer = await Test.findOne({ _id: `${usersAllAnswer[i]._id}` });
    if (checkAnswer.rightAnswer === usersAllAnswer[i].rightAnswer) {
      allCorrect.push(usersAllAnswer[i].rightAnswer);
    }
  }
  console.log(allCorrect.length);
};
results();

// res.status(201).json(result);
module.exports = results;
