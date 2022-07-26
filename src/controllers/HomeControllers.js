import Aluno from "../models/Aluno";

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: "Marcia",
      sobrenome: "Maria",
      email: "marciamaria@outlook.com",
      idade: "55",
      peso: "69",
      altura: "1.66",
    });
    res.status(200).json({ novoAluno });
  }
}

export default new HomeController();
