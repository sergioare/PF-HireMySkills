const Router = require("express");
const products = require("./products.js");
const router = Router();
const category = require("./category.js");
const profession = require("./profession.js");
const professionals = require("./professionals.js");
const users = require("./users.js");

router.use("/category", category);
router.use("/profession", profession);
router.use("/users", users);
router.use("/products", products);

module.exports = router;
