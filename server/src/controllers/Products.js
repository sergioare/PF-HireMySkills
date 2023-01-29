const products = require("../models/products.js");

const getProducto = async (req, res) => {
  try {
    const product = await products.findAll();
    console.log(product);
    res.send(product);
  } catch (error) {
    res.send({ message: error });
  };
};

const postProducts = async (req, res) => {
  let { name, quantity, description, img, price } = req.body;
  try {
    await products.create({
      name,
      quantity,
      description,
      img,
      price,
    });

    res.json("create correct");
  } catch (error) {
    req.dend(error);
  }
};


module.exports = {
  postProducts,
  getProducto  
};
