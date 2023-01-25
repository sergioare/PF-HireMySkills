const Professions = require("../models/Profession.js");

const postProfessions = async (req, res) => {
  let { profession, categoryId } = req.body;

  try{
    await Professions.create({ profession, categoryId });
    res.json({ emssage: 'Pofession created' });
  } catch (error) {
    res.json(error);
  };
};
module.exports = postProfessions;


// let recipedb = await Diets.findAll({
//   where: { name: dietType },
// });

// await newrecipe.addDiets(recipedb);
// return newrecipe;
