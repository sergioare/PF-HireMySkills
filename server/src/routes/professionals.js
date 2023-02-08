const {
  postcreateprofessional,
  getDBInfo,
  borradologico,
} = require("../controllers/controllerOne.js");
const Router = require("express");
const {getprofesinalsid}  = require("../controllers/Professionals.js");
const router = Router();

router.get("/", getDBInfo); // trae toda la info de la db
router.post("/", postcreateprofessional); // ruta put (crea prestador de servicos )
router.delete("/:id", borradologico); // borrado logico (administrador )
router.get("/:id",getprofesinalsid);

module.exports = router;
