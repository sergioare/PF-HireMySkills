import Router from "express";
import profession from "./profession.js";

const router = Router();

router.use("/profession", profession); // traer toda la data

// router.use("/");
// router.use("/");

export default router;
