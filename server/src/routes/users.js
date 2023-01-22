// const Users = require("../controllers/Users.js");
const Router = require("express");
const { getIdUser } = require("../controllers/getIdUser.js");
const { createUser } = require("../controllers/createUser.js");
const { getNameUser } = require("../controllers/getNameUser.js");
// const postUsers = require("../controllers/Users.js");

const UserRouter = Router();

// Get
UserRouter.get('/', getNameUser);
UserRouter.get('/:id', getIdUser);

// Post
UserRouter.post('/', createUser);


module.exports = UserRouter;
