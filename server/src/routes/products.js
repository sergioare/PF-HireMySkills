const getproductprof = require("../controllers/Products.js");
const postProducts = require("../controllers/Products.js");
const Router = require("express");
const router = Router();


  router.post("/", postProducts);
  router.get("/",getproductprof)

module.exports = router;
