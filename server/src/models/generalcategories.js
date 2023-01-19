const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("professionals", {
    id: {
      type: DataTypes.UUID, // este tipo de dato es para que no se repita con el de la API (234T324R23T)
      defaultValue: DataTypes.UUIDV4, // y se genera de independencia
      allowNull: false,
      primaryKey: true,
    },
    typecategory: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
