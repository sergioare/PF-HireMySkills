const contactUs = require("../models/contactus.js");

const getContactUs = async (req, res) => {
  try {
    const contactus_list = await contactUs.findAll();
    res.json(contactus_list);
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = getContactUs;
