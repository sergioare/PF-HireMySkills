const postCategory = require("../controllers/Categories.js");
const Router = require("express");
const { professionsGetName } = require("../controllers/professionGetName.js");
const { getCategory } = require("../controllers/getCategory.js");
const router = Router();

router.get('/', getCategory)
router.get('/:id/profession', professionsGetName)
router.post("/", postCategory);

module.exports = router;
