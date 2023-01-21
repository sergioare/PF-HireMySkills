const professionals = require('../models/users');


const getDBInfo = async (req, res) => {
  try {
    const getdb = await professionals.findAll();
    res.send(getdb);
  } catch (error) {
    res.send(error);
  }
};

const postcreate = async (req, res) => {
  const { name, photo, description, email, town, contact, profession } = req.body;
  console.log(req.body, "::: es aqui");
  try {
    await professionals.create({ name, photo, description, email, town, contact, profession });
      
    res.send({ message: 'Professional create'});
    // }
  } catch (error) {
    res.send(error);
  };
};

module.exports = {
  getDBInfo,
  postcreate,
};
