const { Router } = require("express") ;
const { getUdClient } = require('../controllers/getIdClient') ;

const clientRouter = Router();

clientRouter.get('/', getUdClient)

module.exports = clientRouter;