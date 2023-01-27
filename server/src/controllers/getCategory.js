const categories = require("../models/categories");

const getCategory = async (req, res) => {
  try {
    const categories = await categories.findAll();
    res.send(categories);
  } catch (error) {
    res.send({ message: error });
  }
};

module.exports = { getCategory };
