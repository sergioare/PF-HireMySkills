const { DataTypes } = require("sequelize");
const sequelize = require("../db/db.js");

const professionals =
  // defino el modelo
  sequelize.define(
    "professionals",
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
      description: {
        // skill
        type: DataTypes.TEXT,
        allowNull: true,
      },
      photo: {
        // la foto del rostro del profesional
        type: DataTypes.TEXT,
        defaultValue:
          "https://www.supercoloring.com/sites/default/files/styles/coloring_medium/public/cif/2022/02/521-bust-in-silhouette-coloring-page.png",
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
      state: {
        //lugar donde esta ubicado
        type: DataTypes.STRING,
        allowNull: false,
      },
      country: {
        //lugar donde esta ubicado
        type: DataTypes.STRING,
        allowNull: false,
      },
      contact: {
        // numero del profesional
        type: DataTypes.TEXT,
        allowNull: false,
      },
      rating: {
        type: DataTypes.DECIMAL(3, 2),
        defaultValue: 5.0,
      },

      count: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
      },
      portfolio: {
        type: DataTypes.TEXT,
      },
      skills: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      deleted: {
        //borrado logico
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      timestamps: false,
    }
  );

module.exports = professionals;
