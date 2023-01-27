const Router = require("express");
// const getDBInfo = require("../controllers/controllerOne");
// const { professionsGetName } = require("../controllers/professionGetName");
const router = Router();
const { postProfessions, searchProfession } = require("../controllers/Professions.js");

// GET
router.get('/', searchProfession);

// POST
router.post("/", postProfessions);

module.exports = router;
