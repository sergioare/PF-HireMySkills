const { Error } = require("sequelize");
const professionals = require("../models/professionals.js");
// ruta traer toda la data
const getDBInfo = async (req, res) => {
  try {
    // btraemos toda la informacion de base de datos
    const get = await professionals.findAll(id);
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
  } = req.body; //requerimos la informacion del cliente

  try {
    // aqui buscamos si el cliente esta repetido por email
    const repetido = await professionals.findOne({ where: { email: email } });
    if (repetido) {
      res.send("client reppit");
      // verificamos que se llene el formulario
    } else if (
      !name ||
      !description ||
      !photo ||
      !email ||
      !town ||
      !contact ||
      !rating ||
      !portfolio
    ) {
      res.send("insert information");
      // se crea nuevo presta servicios
    } else {
      await professionals.create({
        name,
        description,
        photo,
        email,
        town,
        contact,
        rating,
        portfolio,
      });

      res.send("created successfully");
    }
  } catch (error) {
    console.log(error);
    res.send({ massage: error });
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
