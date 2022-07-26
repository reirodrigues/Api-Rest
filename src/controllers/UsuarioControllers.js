import Usuario from "../models/Usuario";

class UsuarioController {
  async store(req, res) {
    try {
      const novoUsuario = await Usuario.create(req.body);
      return res.status(200).json({ novoUsuario });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const usuarios = await Usuario.findAll();
      console.log("Usuario ID", req.usuarioId);
      console.log("Usuario EMAIL", req.usuarioEmail);
      return res.json(usuarios);
    } catch (e) {
      return res.json("Error");
    }
  }

  // Show
  async show(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.params.id);
      return res.json(usuario);
    } catch (e) {
      return res.json("Error");
    }
  }

  // Update
  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ["Id não informado"],
        });
      }

      const usuario = await Usuario.findByPk(req.params.id);

      if (!usuario) {
        return res.status(400).json({
          errors: ["Usuário não existe"],
        });
      }

      const novosDados = await usuario.update(req.body);

      return res.json(novosDados);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ["Id não informado"],
        });
      }

      const usuario = await Usuario.findByPk(req.params.id);

      if (!usuario) {
        return res.status(400).json({
          errors: ["Usuário não existe"],
        });
      }

      await usuario.destroy();
      return res.json(usuario);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UsuarioController();
