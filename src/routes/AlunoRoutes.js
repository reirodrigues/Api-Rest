import Router from "express";
import alunocontrollers from "../controllers/AlunoControllers";
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

router.get("/", alunocontrollers.index);
router.post("/", loginRequired, alunocontrollers.store);
router.put("/:id", loginRequired, alunocontrollers.update);
router.get("/:id", alunocontrollers.show);
router.delete("/:id", loginRequired, alunocontrollers.delete);

export default router;
