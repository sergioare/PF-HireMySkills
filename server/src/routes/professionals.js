const { postcreateprofessional } = require("../controllers/controllerOne.js");
const  { getDBInfo } = require("../controllers/controllerOne");
const  { borradologico } = require("../controllers/controllerOne");
const Router = require("express");
const router = Router();


router.get("/", getDBInfo);// trae toda la info de la db 
router.post("/", postcreateprofessional);// ruta put (crea prestador de servicos )
router.delete('/:id', borradologico); // borrado logico (administrador )

module.exports = router;