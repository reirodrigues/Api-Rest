import Router from "express";
import usuariocontrollers from "../controllers/UsuarioControllers";
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

router.post("/", usuariocontrollers.store);
router.get("/", loginRequired, usuariocontrollers.index);
router.get("/:id", usuariocontrollers.show);
router.put("/:id", usuariocontrollers.update);
router.delete("/:id", usuariocontrollers.delete);

export default router;

/*
index -> lista todos os usuarios -> GET,
store/create -> cria um novo usuario -> POST,
delete -> apaga um usuario -> DELETE,
show -> mostra um usuario -> GET,
updated -> atualiza um usuario -> PATCH(Altera somente um valor) ou PUT,
*/
