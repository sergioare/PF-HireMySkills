const Router = require("express");
const products = require("./products.js");
const router = Router();
const category = require("./category.js");
const profession = require("./profession.js");
const professionals = require("./professionals.js");
const users = require("./users.js");
const mail = require("./mail");

router.use("/category", category);
router.use("/profession", profession);
router.use("/professionals", professionals);
router.use("/users", users);
router.use("/products", products);
router.use("/mail", mail);

module.exports = router;
