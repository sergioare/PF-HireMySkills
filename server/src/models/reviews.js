const { DataTypes } = require("sequelize");
const sequelize = require("../db/db.js");
const Reviews = sequelize.define("reviews", {
  id: {
    type: DataTypes.UUID, // este tipo de dato es para que no se repita con el de la API (234T324R23T)
    defaultValue: DataTypes.UUIDV4, // y se genera de independencia
    allowNull: false,
    primaryKey: true,
  },
  review_rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  review_comment: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Reviews;
