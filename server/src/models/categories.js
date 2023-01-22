const { DataTypes } = require("sequelize");
const sequelize = require("../db/db.js");

const categories = sequelize.define(
  "categories",
  {
    id: {
      type: DataTypes.INTEGER, // este tipo de dato es para que no se repita con el de la API (234T324R23T)
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    typecategory: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = categories;
