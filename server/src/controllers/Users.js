const users = require("../models/users.js");

const postUsers = async (req, res) => {
  let { name, email, town, contact, photo } = req.body;

  await users
    .create({
      name,
      email,
      photo,
      town,
      contact,
    })
    .then(() =>
      res.json({
        name,
        email,
        photo,
        town,
        contact,
      })
    )
    .catch((err) => res.status(400).json({ message: err.message }));
};

module.exports = postUsers;
