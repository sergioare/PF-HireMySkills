const professionals = require("../models/professionals.js");
const reviews = require("../models/reviews.js");
const users = require("../models/users.js");
const profession = require("../models/profession.js");

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

const couldReview = async (req, res) => {
  const { professionalId, userId } = req.params;
  try {
    console.log("empezamos");
    const firstFilter = await professionals.findAll({
      where: {
        id: professionalId,
      },

      include: {
        model: users,
        through: {
          where: { userId: userId },
        },
      },
    });
    if (firstFilter[0].users.length == 0) {
      return res.status(200).json(false);
    }

    const secondFilter = await reviews.findAll({
      where: { professionalId, userId },
    });

    if (secondFilter.length == 0) {
      return res.status(200).json(true);
    } else {
      return res.status(200).json(false);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const Professional_Review = async (req, res) => {
  const { professionalId } = req.params;
  try {
    const reviews_list = await reviews.findAll({
      where: { professionalId },
    });
    res.json(reviews_list);
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = { postReview, getReviews, couldReview, Professional_Review };
