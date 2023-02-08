const {Checkout} = require ('../controllers/Payment');
const Router = require("express");

const router = Router();

router.post("/", Checkout)

module.exports = router;