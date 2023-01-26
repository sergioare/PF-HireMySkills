const shoppingcart = require("../models/shoppingcart.js");

const postShoppingCart = async (req, res) => {
  let { products_bought, quantity_bought } = req.body;

  await shoppingcart
    .create({
      products_bought,
      quantity_bought,
    })

    .catch((err) => res.status(400).json({ message: err.message }));
};

module.exports = postShoppingCart;
