const Router = require("express");
const router = Router();
const category = require("./category.js");
const profession = require("./profession.js");
const professionals = require("./professionals.js");
const users = require("./users.js");

router.use("/category", category);
router.use("/profession", profession);
router.use("/professionals", professionals);
router.use("/users", users);

module.exports = router;
