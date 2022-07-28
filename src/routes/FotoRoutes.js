import Router from "express";
import fotocontrollers from "../controllers/FotoControllers";
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

router.post("/", loginRequired, fotocontrollers.store);

export default router;
