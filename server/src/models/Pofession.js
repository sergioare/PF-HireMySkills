const { DataTypes } = require("sequelize");
const sequelize = require("../db/db.js");
const Profession = sequelize.define("profession", {
  id: {
    type: DataTypes.UUID, // este tipo de dato es para que no se repita con el de la API (234T324R23T)
    defaultValue: DataTypes.UUIDV4, // y se genera de independencia
    allowNull: false,
    primaryKey: true,
  },
  profession: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Profession;
