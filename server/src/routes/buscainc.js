const Router = require("express");
const router = Router();
const {nombreincompleto} = require("../controllers/Professionals")


router.get("/",nombreincompleto)




module.exports = router;