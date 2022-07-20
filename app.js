import express from "express";
import HomeRoutes from "./src/routes/HomeRoutes";

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
  }
}

export default new App().app;
