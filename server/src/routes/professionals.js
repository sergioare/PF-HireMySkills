// const Professionals = require("../controllers/Professionals.js");
// const Router = require("express");
// const router = Router();

// try {
//   router.post("/", Professionals);
// } catch (error) {
//   alert(error.message);
// }

// module.exports = router;

const Router = require("express");
const { postcreate } = require("../controllers/controllerOne");

const ProfessionalRouter = Router();

ProfessionalRouter.get('/', postcreate);
ProfessionalRouter.post('/', postcreate);

module.exports = ProfessionalRouter;
