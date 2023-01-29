const Router = require("express");
const router = Router();
const pay = require("../controllers/pay.js");

router.post("/", pay);

module.exports = router;
