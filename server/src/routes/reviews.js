const Router = require("express");
const router = Router();
const reviews = require("../controllers/reviews.js");

router.post("/", reviews);

module.exports = router;
