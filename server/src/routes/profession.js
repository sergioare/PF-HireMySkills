const Router = require("express");
// const getDBInfo = require("../controllers/controllerOne");
// const { professionsGetName } = require("../controllers/professionGetName");
const router = Router();
const {
  postProfessions,
  searchProfession,
  searchProfessionId,
} = require("../controllers/Professions.js");

// GET
router.get("/", searchProfession);
router.get("/:id", searchProfessionId);

// POST
router.post("/", postProfessions);

module.exports = router;
