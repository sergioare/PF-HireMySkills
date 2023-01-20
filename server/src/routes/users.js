const Users = require("../controllers/Users.js");
const Router = require("express");
const router = Router();

try {
  router.post("/", Users);
} catch (error) {
  alert(error.message);
}

module.exports = router;
