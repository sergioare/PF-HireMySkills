const Router = require("express");
const getContactUs = require("../controllers/getcontactus.js");
const router = Router();
const contactus = require("../controllers/postcontactus.js");

router.post("/", contactus);
router.get("/", getContactUs);

module.exports = router;
