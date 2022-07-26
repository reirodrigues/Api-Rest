import Router from "express";
import tokencontrollers from "../controllers/TokenControllers";

const router = new Router();

router.post("/", tokencontrollers.store);

export default router;
