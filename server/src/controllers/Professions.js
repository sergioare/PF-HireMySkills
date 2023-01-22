const professions = require("../models/profession.js");

const postProfessions = async (req, res) => {
  let { profession, categoryId } = req.body;
  await professions
    .create({
      profession,
      categoryId,
    })
    .then(() => res.json({ profession }))
    .catch((err) => res.status(400).json(err.message));
};
module.exports = postProfessions;
