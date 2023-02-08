const shoppingcart = require("../models/shoppingcart.js");

const postShoppingCart = async (req, res) => {
  let { products_bought, quantity_bought } = req.body;
  try{
  await shoppingcart
    .create({
      products_bought,
      quantity_bought,
    })
  res.send("create")
  }catch(error){
  res.send(error)
  }
};

module.exports = postShoppingCart;
