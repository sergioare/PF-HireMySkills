const reviews = require("../models/reviews.js");

const postReview = async (req, res) => {
  let { review_comment, review_rating, userId, professionalId } = req.body;
  try{
  await users
    .create({
      review_comment,
      review_rating,
      userId,
      professionalId,
    })
   res.send("create")
  }catch(error){
    res.send(error)
  };
};

module.exports = postReview;
