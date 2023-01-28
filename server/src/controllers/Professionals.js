const professionals = require("../models/professionals.js");

const getprofesinalsid = async (req, res) => {
  const { id } = req.params;
  try {
    const getid = await professionals.findByPk(id);
    res.send(getid);
  } catch (error) {
    res.send(error);
  }
};


module.exports = { getprofesinalsid };
