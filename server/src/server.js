const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const sequelize = require("./db/db.js");
const routes = require("./routes/index.js");

const server = express();

server.use(cors());
server.use(morgan("dev"));
server.use(express.json());
server.use(cookieParser());

server.use(routes);

(async function seqSync() {
  try {
    sequelize.sync({ force: false }).then(() => {
      console.log("Postgres sync has been established successfully.");
    });
  } catch (error) {
    console.error("Unable to sync to the database:", error);
  }
})();

const {
  professionals,
  users,
  categories,
  profession,
  products,
  reviews,
  shoppingcart,
  pay,
} = sequelize.models;
// console.log(sequelize.models);

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

professionals.hasMany(products);
products.belongsTo(professionals);

professionals.hasMany(reviews);
users.hasMany(reviews);
reviews.belongsTo(users);
reviews.belongsTo(professionals);

products.belongsToMany(users, {
  through: "products_users",
});
users.belongsToMany(products, {
  through: "products_users",
});

users.hasMany(shoppingcart);
shoppingcart.belongsTo(users);

shoppingcart.hasOne(pay);
pay.belongsTo(shoppingcart);

module.exports = server;
