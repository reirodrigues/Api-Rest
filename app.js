import dotenv from "dotenv";
dotenv.config();

import "./src/database";

import express from "express";
import HomeRoutes from "./src/routes/HomeRoutes";
import UsuarioRoutes from "./src/routes/UsuarioRoutes";
import TokenRoutes from "./src/routes/TokenRoutes";
import AlunoRoutes from "./src/routes/AlunoRoutes";
import FotoRoutes from "./src/routes/FotoRoutes";

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extendend: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/", HomeRoutes);
    this.app.use("/usuarios", UsuarioRoutes);
    this.app.use("/tokens", TokenRoutes);
    this.app.use("/alunos", AlunoRoutes);
    this.app.use("/fotos", FotoRoutes);
  }
}

export default new App().app;
