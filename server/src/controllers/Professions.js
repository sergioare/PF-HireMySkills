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
  const { profession, filter } = req.query;
  if (!profession) {
    const Prof_list = await Profession.findAll();
    res.send(Prof_list);
  } else {
    try {
      const findProfessionals = await professionals.findAll();
      // console.log(findProfessionals, 'PROFESIONAL');
      const result = findProfessionals.filter((pf) =>
        pf.skills.some((sk) => sk.toLowerCase() === profession.toLowerCase())
      );
      if (!filter) {
        if (result.length) return res.send(result);
        else return res.send({ message: "Profession not found" });
      } else {
        if (result.length) {
          if (filter === "az") {
            const abc = result.sort((a, b) => {
              if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
              else return -1;
            });
            // console.log(abc, 'A-Z');
            res.send(abc);
          }
          if (filter === "za") {
            const abc = result.sort((a, b) => {
              if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
              else return 1;
            });
            // console.log(abc, 'Z-A');
            res.send(abc);
          }
          if (filter === "max") {
            const filterRat1 = result.sort((a, b) => {
              if (a.rating === b.rating) return 1;
              else return -1;
            });
            // console.log(filterRat1, 'FILTER!');
            return res.send(filterRat1);
          }
          if (filter === "min") {
            const filterRat = result.sort((a, b) => {
              if (a.rating === b.rating) return -1;
              else return 1;
            });
            // console.log(filterRat, 'FILTER!');
            return res.send(filterRat);
          }
        } else return res.send({ message: "Profession not found" });
      }
    } catch (error) {
      res.send({ message: error });
    }
  }
};

const searchProfessionId = async (req, res) => {
  const { id } = req.params;

  const professions_list = await Professions.findAll({
    where: { categoryId: id },
  });

  res.json(professions_list);
};
module.exports = {
  postProfessions,
  searchProfession,
  searchProfessionId,
};

// let recipedb = await Diets.findAll({
//   where: { name: dietType },
// });

// await newrecipe.addDiets(recipedb);
// return newrecipe;
