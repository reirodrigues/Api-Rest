import Router from "express";
import usuariocontrollers from "../controllers/UsuarioControllers";
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

// Fins Educacionais
// router.get("/", usuariocontrollers.index); // Lista usuário
// router.get("/:id", usuariocontrollers.show); // Lista usuário

router.post("/", loginRequired, usuariocontrollers.store);
router.put("/", loginRequired, usuariocontrollers.update);
router.delete("/", loginRequired, usuariocontrollers.delete);

export default router;

/*
index -> lista todos os usuarios -> GET,
store/create -> cria um novo usuario -> POST,
delete -> apaga um usuario -> DELETE,
show -> mostra um usuario -> GET,
updated -> atualiza um usuario -> PATCH(Altera somente um valor) ou PUT,
*/
