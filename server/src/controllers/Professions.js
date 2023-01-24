const Professions = require("../models/Profession.js");

const postProfessions = async (req, res) => {
  let { profession, categoryId } = req.body;
  await Professions
    .create({
      profession,
      categoryId,
    })
    .then(() => res.json({ profession }))
    .catch((err) => res.status(400).json(err.message));
};
module.exports = postProfessions;
