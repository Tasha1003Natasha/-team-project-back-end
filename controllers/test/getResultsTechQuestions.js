const { Test } = require("../../models/test");

const getResultsTechQuestions = async(req, res) => {
    const test = req.body;
    console.log(test);
}

module.exports = getResultsTechQuestions;