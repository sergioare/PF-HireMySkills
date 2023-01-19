const { Router } = require("express") ;
const clientRouter = require('./client') 
const profession = require('./profession');

const router = Router();
router.use("/client", clientRouter);
router.use("/profession", profession);
router.use("/");

module.exports = router;
