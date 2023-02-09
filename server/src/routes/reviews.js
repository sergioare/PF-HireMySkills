const Router = require("express");
const router = Router();
const {
  postReview,
  getReviews,
  couldReview,
  Professional_Review,
} = require("../controllers/reviews.js");

router.post("/", postReview);
router.get("/", getReviews);
router.get("/:professionalId/:userId", couldReview);
router.get("/:professionalId", Professional_Review);
module.exports = router;
