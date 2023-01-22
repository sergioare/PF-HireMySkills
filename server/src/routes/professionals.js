const { postcreateprofessional } = require("../controllers/controllerOne.js");
const  { getDBInfo } = require("../controllers/controllerOne");
const  { borradologico } = require("../controllers/controllerOne");
const Router = require("express");
const router = Router();


router.get("/", getDBInfo);
router.post("/", postcreateprofessional);
router.delete('/:id', borradologico);

module.exports = router;