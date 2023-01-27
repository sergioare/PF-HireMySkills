const { Sequelize } = require("sequelize");
const { config } = require("dotenv");

config();

const { DB_URL } = process.env;
const sequelize = new Sequelize(
  DB_URL,
  {
    dialect: "postgres",
    native: false,
    logging: false,
  }
);

// Professional.belongsToMany(Profession, { through: "professional_profession" });
// Profession.belongsToMany(Professional, { through: "professional_profession" });

module.exports = sequelize;
