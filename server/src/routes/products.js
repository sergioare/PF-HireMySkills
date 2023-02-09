const { postProducts, getProducto } = require("../controllers/Products.js");
const Router = require("express");
const router = Router();

try {
  router.get('/', getProducto)
  router.post("/", postProducts);
} catch (error) {
  alert(error.message);
}

module.exports = router;
