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
        // la foto del rostro del profesional
        type: DataTypes.TEXT,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING, //  contacto del professional
        allowNull: false,
      },
      town: {
        //lugar donde esta ubicado
        type: DataTypes.STRING,
        allowNull: false,
      },
      contact: {
        // numero del profesional
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      deleted: {
        //borrado logico
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },role: {
        type: DataTypes.ENUM,
        values: ['admin', 'user', "professional"],
        defaultValue: 'user',
      }
    },
    {
      timestamps: false,
    }
  );

module.exports = users;
