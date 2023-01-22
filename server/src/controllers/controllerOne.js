const professionals = require("../models/professionals.js");


const getDBInfo = async (req, res) => {
  try {
    const get = await professionals.findAll();
    res.send(get);
  } catch (error) {
    res.send({ message: error });
  }
};


const postcreateprofessional = async (req, res) => {
  const { name, description, profession, photo, email, town, contact, rating, portfolio } = req.body;
  console.log(req.body, "::: es aqui");
  try {
    await professionals.create({ name, description, profession, photo, email, town, contact, rating, portfolio, });

    res.send("created successfully");
  } catch (error) {
    res.send(error);
  }
};
const borradologico = async (req,res) => {
  const {id}=req.params
  try {
    const borrado = await professionals.update(
      { deleted: true },
      {
        where: {
          id: id,
        },
      }
    );
    res.send(borrado);
  } catch (error) {
    res.send(error);
  }
};
module.exports = {
  getDBInfo,
  postcreateprofessional,
  borradologico,
};
