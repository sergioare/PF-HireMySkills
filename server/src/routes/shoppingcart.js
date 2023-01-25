const Router = require("express");
const router = Router();
const shoppingcart = require("../controllers/shoppingcart.js");

router.post("/", shoppingcart);

module.exports = router;
