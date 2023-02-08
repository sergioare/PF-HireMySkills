const { DataTypes } = require("sequelize");
const sequelize = require("../db/db.js");

const Profession = sequelize.define("profession", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  profession: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Profession;
