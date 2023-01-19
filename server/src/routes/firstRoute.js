import { Router } from "express";
import clientRouter from './client'

const router = Router();
router.use("/clent/id", clientRouter);
router.use("/");
router.use("/");

export default router;
