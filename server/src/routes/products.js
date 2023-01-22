const Products = require("../controllers/Products.js");
const Router = require("express");
const router = Router();

try {
  router.post("/", Products);
} catch (error) {
  alert(error.message);
}

module.exports = router;
