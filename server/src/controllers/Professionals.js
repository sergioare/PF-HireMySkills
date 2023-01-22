const Professionals = require("../models/professionals.js");
const Profession = require("../models/profession.js");

const postProfessional = async (req, res) => {
  let {
    name,
    description,
    photo,
    email,
    town,
    contact,
    portfolio,
    professions,
  } = req.body;

  let CreateProfessional = await Professionals.create({
    name,
    description,
    photo,
    email,
    town,
    contact,
    portfolio,
  })
    // .then(() =>
    //   res.json({
    //     name,
    //     description,
    //     photo,
    //     email,
    //     town,
    //     contact,
    //     portfolio,
    //   })
    // )
    .catch((err) => res.status(400).json({ message: err.message }));

  let auxprof = await Profession.findAll({ where: { id: professions } });
  console.log(auxprof);

  CreateProfessional.addProfessions(auxprof);
};

module.exports = postProfessional;
