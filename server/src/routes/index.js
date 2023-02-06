const Router = require("express");
const products = require("./products.js");
const router = Router();
const category = require("./category.js");
const profession = require("./profession.js");
const professionals = require("./professionals.js");
const users = require("./users.js");
const reviews = require("./reviews.js");
const shoppingcart = require("./shoppingcart.js");
const pay = require("./pay.js");
const email = require("./email.js");
const contactus = require("./contactus.js");
const filters = require('./filters')

router.use("/category", category); //crear categorias y hacer put
router.use("/profession", profession); // crear profession
router.use("/professionals", professionals); // ruta de (crear , borrado logico,traer toda la info)
router.use("/users", users);
router.use("/products", products);
router.use("/reviews", reviews);
router.use("/shoppingcart", shoppingcart);
router.use("/pay", pay);
router.use("/email", email); // plantilla para envio de notificaciones por mail
router.use("/contactus", contactus); // para el formulario Contact Us
router.use('/filters', filters);

module.exports = router;
