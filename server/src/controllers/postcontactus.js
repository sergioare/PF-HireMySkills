const contactUs = require("../models/contactus.js");

const postContactUs = async (req, res) => {
  let { name, email, question, message } = req.body;
  try {
    await contactUs.create({
      name,
      email,
      question,
      message,
    });
    res.send("question sent");
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = postContactUs;
