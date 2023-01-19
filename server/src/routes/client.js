import { Router } from "express";
import { getUdClient } from '../controllers/getIdClient';

const clientRouter = Router();

clientRouter.get('/', getUdClient)

export default clientRouter;