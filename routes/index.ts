import { Application } from "express";
import express from "express";
import invoiceRouter from "./invoiceRoutes";
import clientsRouter from "./clientRoutes";


function routerApi(app: Application) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/invoice", invoiceRouter);
  router.use("/clients", clientsRouter);
}

export default routerApi;
