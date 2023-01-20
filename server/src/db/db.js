require('dotenv').config();
const { Sequelize } = require("sequelize");
const Generalcategories = require('../models/Generalcategories');
const Professionals = require('../models/Professionals');
const Profession = require('../models/Profession ');


const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    // dialect: "postgres",
    native: false,
    logging: false,
  }
);

// const seqConn = async ()=>{
//   try {
//     sequelize
//       .authenticate()
//       .then(() => console.log("Authenticate has been successfull"));
//   } catch (error) {
//     console.log("Authenticate has not been succesfull", error);
//   }
// };

Generalcategories(sequelize);
Professionals(sequelize);
Profession(sequelize);

console.log(sequelize.models, "MODELOS");


// Professional.belongsToMany(Profession, { through: "professional_profession" });
// Profession.belongsToMany(Professional, { through: "professional_profession" });

module.exports = sequelize;

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};