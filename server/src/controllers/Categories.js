const categories = require("../models/categories.js");

const postCategory = async (req, res) => {
  let { typecategory } = req.body;
  try {
    await categories.create({
      typecategory,
    });
    res.send("category created");
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = postCategory;
