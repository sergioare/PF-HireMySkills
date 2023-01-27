const Profession = require("../models/profession.js");
const Professions = require("../models/profession.js");
const professionals = require("../models/professionals.js");

const postProfessions = async (req, res) => {
  let { profession, categoryId } = req.body;
  try {
    await Professions.create({ profession, categoryId });
    res.json({ profession });
  } catch (error) {
    res.status(400).json(err.message);
  }
};

const searchProfession = async (req, res) => {
  const { profession } = req.query;
  try {
    const findProfessionals = await professionals.findAll();
    // console.log(findProfessionals, 'PROFESIONAL');
    const result = findProfessionals.filter((pf) =>
      pf.skills.some((sk) => sk.toLowerCase() === profession.toLowerCase())
    );
    if (result.length) return res.send(result);
    else return res.send({ message: "Profession not found" });
  } catch (error) {
    res.send({ message: error });
  }
};

module.exports = {
  postProfessions,
  searchProfession,
};

// let recipedb = await Diets.findAll({
//   where: { name: dietType },
// });

// await newrecipe.addDiets(recipedb);
// return newrecipe;
