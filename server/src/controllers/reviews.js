const reviews = require("../models/reviews.js");

const postReview = async (req, res) => {
  let { review_comment, review_rating, userId, professionalId } = req.body;

  await users
    .create({
      review_comment,
      review_rating,
      userId,
      professionalId,
    })

    .catch((err) => res.status(400).json({ message: err.message }));
};

module.exports = postReview;
