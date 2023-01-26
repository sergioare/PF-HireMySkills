const { Model } = require("sequelize");
const Profession = require("../models/Profession.js");
const professionals = require("../models/professionals.js");


const getDBInfo = async (req, res) => {
  try {
    const get = await professionals.findAll({
      include: [
        {
          model: Profession,
          attributes: {
            attributes: ['profession']},
        }
          ]
    });
    res.send(get);
  } catch (error) {
    res.send({ message: error });
  }
};


const postcreateprofessional = async (req, res) => {
  const { name, description, skills, photo, email, town, contact, rating, portfolio } = req.body;
  // console.log(req.body, "::: es aqui");
  try {
    const repetido = await professionals.findOne({ where: { email: email } });
    if (repetido) return res.send("client reppit"); // verificamos que se llene el formulario
    console.log(repetido, 'REPETIDO');
    if (!name || !description || !photo || !skills || !email || !town || !contact || !rating || !portfolio) return res.send("insert information");
      // se crea nuevo presta servicios
    const newProfes = await professionals.create({ name, description, photo, email, town, contact, rating, portfolio, skills });
    console.log(newProfes, 'PROFESIONAL NEW');
    const newProfesion = await Profession.findAll({ where: { profession: skills } })
    newProfes.addProfession(newProfesion)
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
