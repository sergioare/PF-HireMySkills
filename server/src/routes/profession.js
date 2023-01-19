const { Router } = require("express");
const getDBInfo = require("../controllers/controllerOne");
const router = Router();

router.get("/",async (req,res)=>{
  try{
  const getapi = await getDBInfo()
  res.status(400).json(getapi)
  }catch(error){
   res.status(404).json(error.message)
  }
});

module.exports = router;
