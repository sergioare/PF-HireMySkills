const { DataTypes } = require("sequelize");
const sequelize = require("../db/db.js");
const ShoppingCart = sequelize.define("shoppingcart", {
  id: {
    type: DataTypes.UUID, // este tipo de dato es para que no se repita con el de la API (234T324R23T)
    defaultValue: DataTypes.UUIDV4, // y se genera de independencia
    allowNull: false,
    primaryKey: true,
  },
  products_bought: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
  quantity_bought: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    allowNull: false,
  },
});

module.exports = ShoppingCart;
