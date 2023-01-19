const { Router } = require("express") ;
const clientRouter = require('./client') 

const router = Router();
router.use("/client/id", clientRouter);
router.use("/");
router.use("/");

module.exports = router;
