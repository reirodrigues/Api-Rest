import dotenv from "dotenv";
dotenv.config();

import "./src/database";

import express from "express";
import HomeRoutes from "./src/routes/HomeRoutes";
import UsuarioRoutes from "./src/routes/UsuarioRoutes";
import TokenRoutes from "./src/routes/TokenRoutes";

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
  }
}

export default new App().app;
