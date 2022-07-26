import Usuario from "../models/Usuario";

class UsuarioController {
  async store(req, res) {
    try {
      const novoUsuario = await Usuario.create(req.body);
      const { id, nome, email } = novoUsuario;
      return res.status(200).json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const usuarios = await Usuario.findAll({
        attributes: ["id", "nome", "email"],
      });
      return res.json(usuarios);
    } catch (e) {
      return res.json("Error");
    }
  }

  // Show
  async show(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.params.id);

      const { id, nome, email } = usuario;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.json("Error");
    }
  }

  // Update
  async update(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.usuarioId);

      if (!usuario) {
        return res.status(400).json({
          errors: ["Usuário não existe"],
        });
      }

      const novosDados = await usuario.update(req.body);
      const { id, nome, email } = novosDados;

      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.usuarioId);

      if (!usuario) {
        return res.status(400).json({
          errors: ["Usuário não existe"],
        });
      }

      await usuario.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UsuarioController();
