const { DataTypes } = require("sequelize");
const sequelize = require("../db/db.js");

const professions = sequelize.define(
  "profession",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    profession: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = professions;