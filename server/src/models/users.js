const { DataTypes } = require("sequelize");
const sequelize = require("../db/db.js");

const users =
  // defino el modelo
  sequelize.define(
    "users",
    {
      id: {
        type: DataTypes.UUID, // este tipo de dato es para que no se repita con el de la API (234T324R23T)
        defaultValue: DataTypes.UUIDV4, // y se genera de independencia
        allowNull: false,
        primaryKey: true,
      },
      name: {
        // nombre del usuario
        type: DataTypes.STRING,
        allowNull: false,
      },
      photo: {
        // la foto del rostro del usuario
        type: DataTypes.TEXT,
        defaultValue:
          "https://www.supercoloring.com/sites/default/files/styles/coloring_medium/public/cif/2022/02/521-bust-in-silhouette-coloring-page.png",
      },
      email: {
        type: DataTypes.STRING, //  contacto del usuario
        allowNull: false,
      },
      town: {
        //lugar donde esta ubicado
        type: DataTypes.STRING,
         allowNull: true,
      },
      contact: {
        // numero del profesional
        type: DataTypes.STRING,
         allowNull: true,
      },
      deleted: {
        //borrado logico
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      sub: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      token: {
        type: DataTypes.STRING,
        allowNull: true,
      }
    },
    {
      timestamps: false,
    }
  );

module.exports = users;
