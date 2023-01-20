const Professionals = require("../controllers/Professionals.js");
const Router = require("express");
const router = Router();

try {
  router.post("/", Professionals);
} catch (error) {
  alert(error.message);
}

module.exports = router;
