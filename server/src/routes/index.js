const  Router  = require( "express");
const profession = require("./profession.js");
const client = require('./client');

const router = Router();

router.use("/profession", profession); // traer toda la data
router.use('/client', client);

// router.use("/");
// router.use("/");

module.exports = router;
