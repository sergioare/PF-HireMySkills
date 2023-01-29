const { Model } = require("sequelize");

const Profession = require("../models/profession.js");

const professionals = require("../models/professionals.js");
// ruta traer toda la data
const getDBInfo = async (req, res) => {
  const { name } = req.query;
  try {
    if (!name) {
      const get = await professionals.findAll({
        include: [
          {
            model: Profession,
            attributes: {
              attributes: ["Profession"],
            },
          },
        ],
      });

      res.send(get);
    } else {
      const getname = await professionals.findAll();
      const filter = getname.filter(
        (e) => e.name.toLowerCase() === name.toLowerCase()
      );
      res.send(filter);
    }
  } catch (error) {
    res.send({ message: error });
  }
};
// ruta crear professional
const postcreateprofessional = async (req, res) => {
  const { name, description, skills, photo, email, town, contact, portfolio } =
    req.body;
  // console.log(req.body, "::: es aqui");
  try {
    const repetido = await professionals.findOne({ where: { email: email } });
    if (repetido) return res.send("Professional already exists");

    // verificamos que se llene el formulario

    if (
      !name ||
      !skills ||
      !email ||
      !town ||
      !contact ||
    )
      return res.status(400).send("insert information");
    // se crea nuevo presta servicios
    const newProfes = await professionals.create({
      name,
      description,
      photo,
      email,
      town,
      contact,
      portfolio,
      skills,
    });
    const newProfesion = await Profession.findAll({
      where: { profession: skills },
    });
    newProfes.addProfession(newProfesion);

    res.send("created successfully");
  } catch (error) {
    res.send(error.message);
  }
};

const borradologico = async (req, res) => {
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
