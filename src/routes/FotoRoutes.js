import Router from "express";
import fotocontrollers from "../controllers/FotoControllers";

const router = new Router();

router.post("/", fotocontrollers.store);

export default router;
