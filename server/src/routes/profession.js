const  { Router } = require( "express");
const  getDBInfo = require( "../controllers/controllerOne.js");
const router = Router();
router.get("/profession ",getDBInfo)


module.exports =  {router}; 