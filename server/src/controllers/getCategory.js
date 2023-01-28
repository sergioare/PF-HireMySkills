const categories = require("../models/categories");

const getCategory = async (req, res) => {
let categories;
  try {
    categories = await categories.findAll();
    res.json(categories);
  } catch (error) {
    res.send({ message: error.message });
  }
};

module.exports = { getCategory };
