const categories = require("../models/categories.js");

const postCategory = async (req, res) => {
  let { typecategory } = req.body;

  await categories
    .create({
      typecategory,
    })
    .then(() =>
      res.json({
        typecategory,
      })
    )
    .catch((err) => res.status(400).json({ message: err.message }));
};

module.exports = postCategory;
