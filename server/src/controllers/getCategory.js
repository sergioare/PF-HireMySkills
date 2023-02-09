const categories = require("../models/categories");

const getCategory = async (req, res) => {
let category_list;
  try {
    category_list = await categories.findAll();
    res.json(category_list);
  } catch (error) {
    res.send({ message: error.message });
  }
};

module.exports = { getCategory };
