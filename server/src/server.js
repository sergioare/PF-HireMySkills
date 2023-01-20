const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const sequelize = require("./db/db.js");
const routes = require("./routes/index.js");
// let professionals, users, categories, profession;

const server = express();

server.use(cors());
server.use(morgan("dev"));
server.use(express.json());
server.use(cookieParser());

server.use(routes);

 server.use('/', routes);

(async function seqSync(){
  try {
    sequelize
      .sync({ force: false })
      .then(() => {
        console.log("Postgres sync has been established successfully.");
      })
      .then(console.log(sequelize.models, "Modelos"));
  } catch (error) {
    console.error("Unable to sync to the database:", error);
  }
})();

const { professionals, users, categories, profession } = sequelize.models;

professionals.belongsToMany(users, { through: "professionals_users" });
users.belongsToMany(professionals, { through: "professionals_users" });
professionals.belongsToMany(profession, {
  through: "professionals_profession",
});
profession.belongsToMany(professionals, {
  through: "professionals_profession",
});

categories.hasMany(profession);
profession.belongsTo(categories);

module.exports = server;
