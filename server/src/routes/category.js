const postCategory = require("../controllers/Categories.js");
const Router = require("express");
const router = Router();

try {
  router.post("/", postCategory);
} catch (error) {
  alert(error.message);
}

module.exports = router;
