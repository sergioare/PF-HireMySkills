const Router = require("express");
// const getDBInfo = require("../controllers/controllerOne");
const { professionalsGetName } = require("../controllers/professionGetName");
const router = Router();
const postProfessions = require("../controllers/Professions.js");

// GET
router.get('/', professionalsGetName);

// POST
router.post("/", postProfessions);

module.exports = router;
