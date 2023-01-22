const Router = require("express");
const getDBInfo = require("../controllers/controllerOne");
const router = Router();
const Professions = require("../controllers/Professions.js");

router.get("/", async (req, res) => {
  try {
    const getapi = await getDBInfo();
    res.json(getapi);
  } catch (error) {
    res.status(404).json(error.message);
  }
});

router.post("/", Professions);

module.exports = router;
