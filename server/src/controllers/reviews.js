const professionals = require("../models/professionals.js");
const reviews = require("../models/reviews.js");

const postReview = async (req, res) => {
  let { review_comment, review_rating, userId, professionalId } = req.body;
  try {
    await reviews.create({
      review_comment,
      review_rating,
      userId,
      professionalId,
    });

    const prof_reviewed = await professionals.findByPk(professionalId);
    const prof_prev_rating = prof_reviewed.rating;
    const prof_prev_count = prof_reviewed.count;
    const prof_new_count = prof_prev_count + 1;
    let new_rating =
      (prof_prev_rating * prof_prev_count + review_rating) / prof_new_count;

    await professionals.update(
      { rating: new_rating, count: prof_new_count },

      {
        where: {
          id: professionalId,
        },
      }
    );

    res.send("create");
  } catch (error) {
    res.send(error);
  }
};

const getReviews = async (req, res) => {
  try {
    const reviews_list = await reviews.findAll();
    res.json(reviews_list);
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = { postReview, getReviews };
