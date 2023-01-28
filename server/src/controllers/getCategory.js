const categories = require("../models/categories");

const getCategory = async (req, res) => {
  try {
    const categories = await categories.findAll();
    res.json(categories);
  } catch (error) {
    res.send({ message: error.message });
  }
};

module.exports = { getCategory };
