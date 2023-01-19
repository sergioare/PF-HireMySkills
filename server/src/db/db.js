// import * as dotenv from 'dotenv';
// dotenv.config();
const  { Sequelize } = require('sequelize');

const {
  DB_USER, DB_PASSWORD, DB_NAME
} = process.env

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@localhost:5432/${DB_NAME}`, {
  dialect: 'postgres', 
  native: false, 
})


const seqConn = async ()=>{
  try {
    sequelize
      .authenticate()
      .then(() => console.log("Authenticate has been successfull"));
  } catch (error) {
    console.log("Authenticate has not been succesfull", error);
  }
};
// const { Professionals, Profession, Generalcategories } = sequelize.models;
// console.log(sequelize.models, "acaa");

// Professionals.belongsToMany(Profession, { through: "professional_profession" });
// Profession.belongsToMany(Professionals, { through: "professional_profession" });

module.exports = sequelize;

module.exports = {
  ...sequelize.models,
  conn: sequelize
};