import { Router } from "express";
import getDBInfo from "../controllers/controllerOne.js";
const router = Router();
router.get("/profession ",getDBInfo)


export default router 