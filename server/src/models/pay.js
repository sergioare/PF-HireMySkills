const { DataTypes } = require("sequelize");
const sequelize = require("../db/db.js");
const Pay = sequelize.define("pay", {
  id: {
    type: DataTypes.UUID, // este tipo de dato es para que no se repita con el de la API (234T324R23T)
    defaultValue: DataTypes.UUIDV4, // y se genera de independencia
    allowNull: false,
    primaryKey: true,
  },
  pay_total: {
    type: DataTypes.DECIMAL(12, 2),
    allowNull: false,
  },
  pay_ref: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Pay;
