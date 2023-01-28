const Router = require("express");
const router = Router();
const { postReview, getReviews } = require("../controllers/reviews.js");

router.post("/", postReview);
router.get("/", getReviews);
module.exports = router;
