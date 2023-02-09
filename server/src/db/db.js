const { Sequelize } = require("sequelize");
const { config } = require("dotenv");

config();
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME
} = process.env
const { DB_URL } = process.env;
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    dialect: "postgres",
    native: false,
    logging: false,
  }
);

// Professional.belongsToMany(Profession, { through: "professional_profession" });
// Profession.belongsToMany(Professional, { through: "professional_profession" });

module.exports = sequelize;
