const Professions = require("../models/profession.js");

const postProfessions = async (req, res) => {
  let { profession, categoryId } = req.body;
  try {
    await Professions.create({ profession, categoryId });
    res.send("create");
  } catch (error) {
    res.send(error);
  }
};
module.exports = postProfessions;
