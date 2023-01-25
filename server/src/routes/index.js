const Router = require("express");
const products = require("./products.js");
const router = Router();
const category = require("./category.js");
const profession = require("./profession.js");
const professionals = require("./professionals.js");
const users = require("./users.js");
const reviews = require("./reviews.js");
const shoppingcart = require("./shoppingcart.js");
const pay = require("./pay.js");

router.use("/category", category); //
router.use("/profession", profession);
router.use("/professionals", professionals);// ruta de (crear , borrado logico,traer toda la info)
router.use("/users", users);
router.use("/products", products);
router.use("/reviews", reviews);
router.use("/shoppingcart", shoppingcart);
router.use("/pay", pay);

module.exports = router;
