const { DataTypes, } = require('sequelize');



module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Professionals', {
      id : {
        type: DataTypes.UUID,    // este tipo de dato es para que no se repita con el de la API (234T324R23T)
        defaultValue: DataTypes.UUIDV4,   // y se genera de independencia  
        allowNull: false,
        primaryKey : true
      },
      name: {                      // nombre del usuario 
        type: DataTypes.STRING,
        allowNull: false,
      },
      description:{               // skill 
        type : DataTypes.TEXT,
        allowNull: false
      },
     
      // createdInDb:{               esta propiedad la van a tenr solo las PROFESIIONALS que esten en la BD
      //   type : DataTypes.BOOLEAN,  por lo que es mas facil buscarlas 
      //   allowNull: false,
      //   defaultValue: true
      // },
      photo : {                   // la foto del rostro del profesional 
        type : DataTypes.TEXT,
        allowNull : true
      },
      // img : {                    // fotos de sus trabajos realizados 
      //   type : DataTypes.TEXT,
      //   allowNull : true
      // },
      email:{
        type: DataTypes.STRING,  //  contacto del professional 
        allowNull : true
      },
      town :{               //lugar donde esta ubicado  
        type:DataTypes.STRING,
        allowNull : true
      },
      contact : {                   // numero del profesional 
        type:DataTypes.INTEGER,
        allowNull : true
      },                              
      deleted: {                  //borrado logico 
        type: DataTypes. BOOLEAN,
        default: false,
    },
  
    });
  };