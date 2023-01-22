const postCategory = require("../controllers/Categories.js");
const Router = require("express");
const router = Router();

router.post("/", postCategory);

module.exports = router;
