const Users = require("../controllers/Users.js");
const Router = require("express");
const { getIdUser } = require("../controllers/getIdUser.js");
const { createUser } = require("../controllers/createUser.js");
// const postUsers = require("../controllers/Users.js");
const router = Router();

const UserRouter = Router();

// Get
UserRouter.get('/:id', getIdUser);

// Post
UserRouter.post('/', createUser);


module.exports = UserRouter;
