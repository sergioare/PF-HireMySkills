//import * as dotenv from "dotenv";
const { Sequelize } = require("sequelize");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    dialect: "postgres",
    native: false,
    logging: false,
  }
);

const seqConn = async () => {
  try {
    sequelize
      .authenticate()
      .then(() => console.log("Authenticate has been successfull"));
  } catch (error) {
    console.log("Authenticate has not been succesfull", error);
  }
};
const { Professional, Profession, Generalcategories } = sequelize.models;
console.log(sequelize.models, "acaa");
// Professional.belongsToMany(Profession, { through: "professional_profession" });
// Profession.belongsToMany(Professional, { through: "professional_profession" });

module.exports = sequelize;
