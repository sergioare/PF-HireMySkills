const products = require("../models/products.js");

const getProducto = async (req, res) => {
  try {
    const product = await products.findAll();
    console.log(product);
    res.json(product);
  } catch (error) {
    res.send({ message: error.message });
  }
};

const postProducts = async (req, res) => {
  let { name, quantity, description, img, price, professionalId } = req.body;
  try {
    await products.create({
      name,
      quantity,
      description,
      img,
      price,
      professionalId,
    });
    res.json("product created successfully");
  } catch (error) {
    res.send({ message: error.message });
  }
};

module.exports = {
  postProducts,
  getProducto,
};
