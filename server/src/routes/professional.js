const Router = require("express");
const { postcreate } = require("../controllers/controllerOne");

const ProfessionalRouter = Router();

ProfessionalRouter.get('/', postcreate);
ProfessionalRouter.post('/', postcreate);