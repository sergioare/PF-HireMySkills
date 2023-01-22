const professionals = require("../models/professionals.js");

const postProfessional = async (req, res) => {
  let {
    name,
    description,
    profession,
    photo,
    email,
    town,
    contact,
    portfolio,
  } = req.body;

  await professionals
    .create({
      name,
      description,
      profession,
      photo,
      email,
      town,
      contact,
      portfolio,
    })
    .then(() =>
      res.json({
        name,
        description,
        profession,
        photo,
        email,
        town,
        contact,
        portfolio,
      })
    )
    .catch((err) => res.status(400).json({ message: err.message }));
};

module.exports = postProfessional;
