const categories = require("../models/categories.js");

const postCategory = async (req, res) => {
  let { typecategory } = req.body;
  try {
    await categories.create({
      typecategory,
    });
    res.send("categori create");
  } catch (error) {
    res.send("create");
  }
};

module.exports = postCategory;
