// import * as dotenv from 'dotenv';
// dotenv.config();
const { Sequelize } = require('sequelize');

const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME
} = process.env

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  dialect: 'postgres', 
  native: false, 
})

const seqConn = async ()=>{
  try {
    sequelize
    .authenticate()
    .then(()=>
    console.log("Authenticate has been successfull"))
  } catch (error) {
    console.log("Authenticate has not been succesfull", error)
  }
}

module.exports = {
  ...sequelize.module,
  conn: sequelize
}