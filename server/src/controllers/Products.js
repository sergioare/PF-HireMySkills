const products = require("../models/products.js");

const postProducts = async (req, res) => {
  let { name, quantity, description, img, price } = req.body;

  await products
    .create({
      name,
      quantity,
      description,
      img,
      price,
    })
    .then(() =>
      res.json({
        name,
        quantity,
        description,
        img,
        price,
      })
    )
    .catch((err) => res.status(400).json({ message: err.message }));
};

module.exports = postProducts;
