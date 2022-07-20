import Router from "express";
import homecontrollers from "../controllers/HomeControllers";

const router = new Router();

router.get("/", homecontrollers.index);

export default router;
