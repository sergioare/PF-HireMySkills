const { Error } = require("sequelize");
const professionals = require("../models/professionals.js");
const Profession = require("../models/profession")
// ruta traer toda la data
const getDBInfo = async (req, res) => {
  try {
    // btraemos toda la informacion de base de datos
    const get = await professionals.findAll();
    res.send(get);
  } catch (error) {
    res.send({ message: error });
  }
};
// ruta crear professional
const postcreateprofessional = async (req, res) => {
  const {
    name,
    description,
    skills,
    photo,
    email,
    town,
    contact,
    rating,
    portfolio,
  } = req.body;
  console.log(req.body, "::: es aqui");
  try {
    const repetido = await professionals.findOne({ where: { email: email } });
    if (repetido) return res.send("client reppit"); // verificamos que se llene el formulario
    console.log(repetido, "REPETIDO");
    if (
      !name ||
      !description ||
      !photo ||
      !skills ||
      !email ||
      !town ||
      !contact ||
      !rating ||
      !portfolio
    )
      return res.send("insert information");
    // se crea nuevo presta servicios
    const newProfes = await professionals.create({
      name,
      description,
      photo,
      email,
      town,
      contact,
      rating,
      portfolio,
      skills,
    });
    console.log(newProfes, "PROFESIONAL NEW");
    const newProfesion = await Profession.findAll({
      where: { profession: skills },
    });
    newProfes.addProfession(newProfesion);
    res.send("created successfully");
  } catch (error) {
    res.send(error);
  }
};
// ruta de borrado logico
const borradologico = async (req, res) => {
  // requerimos id de professional
  const { id } = req.params;
  try {
    // buscamos si se encuentra ya eliminado
    const idexiste = await professionals.findByPk(id);
    if (idexiste.deleted === true) {
      res.send(`the ${id} is inactive`);
    } else {
      // buscamos id  y se elimina
      const borrado = await professionals.update(
        { deleted: true },
        {
          where: {
            id: id,
          },
        }
      );
      res.send(`resource removed  id : ${id}`);
    }
  } catch (error) {
    res.send(error);
  }
};
module.exports = {
  getDBInfo,
  postcreateprofessional,
  borradologico,
};
