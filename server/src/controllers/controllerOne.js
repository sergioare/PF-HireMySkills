const Profession = require("../models/profession.js");
const nodemailer = require("nodemailer");
const { GMAIL_ADMIN, PASSWORD_ADMIN } = process.env;

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
      console.log(get, "GET");
      const filer = get.filter((pf) => pf.deleted === false);
      res.send(filer);
    } else {
      const getname = await professionals.findAll();
      const filter = getname.filter(
        (e) => e.name.toLowerCase() === name.toLowerCase()
      );
      if (filter.deleted === false) return res.send(filter);
      else return res.send({ message: error });
    }
  } catch (error) {
    res.send({ message: error });
  }
};
// ruta crear professional
const postcreateprofessional = async (req, res) => {
  const {
    name,
    description,
    photo,
    email,
    town,
    state,
    country,
    contact,
    portfolio,
    skills,
  } = req.body;
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: GMAIL_ADMIN, // generated ethereal user
      pass: PASSWORD_ADMIN, // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  //mensaje que se envia al mail
  let informacion = await transporter.sendMail({
    from: `"HIREMYSKILLS 👾⚒️" <${GMAIL_ADMIN}>`, // sender address
    to: email, // list of receivers
    subject: " CONTINUE TO ENJOY HIREMYSKILLS ", // Subject line
    html: `Hello ${name} . Thank you very much for joining like a professional in HIREMYSKILLS 👏. <br></br>We invite you to add some services to pull up your profile and create more views.  
         .<br></br> Remember that services you provide are one click away from our clients ✍️📉 <br></br>
         <a href=''> Enter here to return to the site</a> - <br></br>
        `, // html body
  });
  // console.log(req.body, "::: es aqui");
  try {
    const repetido = await professionals.findOne({ where: { email: email } });
    if (repetido) return res.status(400).send("Professional already exists");

    // verificamos que se llene el formulario

    if (!name || !skills || !email || !town || !contact)
      return res.status(400).send("insert information");
    // se crea nuevo presta servicios
    const newProfes = await professionals.create({
      name,
      description,
      photo,
      email,
      town,
      state,
      country,
      contact,
      portfolio,
      skills,
    });
    
    const newProfesion = await Profession.findAll({
      where: { profession: skills },
    });
    newProfes.addProfession(newProfesion);
    
    res.send(informacion, "created successfully");
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
