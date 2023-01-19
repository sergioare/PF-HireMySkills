const  Router  = require( "express");
const profession = require("./profession.js");

const router = Router();

router.use("/profession", profession); // traer toda la data

// router.use("/");
// router.use("/");

module.exports = router;
