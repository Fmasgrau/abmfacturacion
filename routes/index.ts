import { Application } from "express";
import express from "express";
import invoiceRouter from "./invoiceRoutes";


function routerApi(app: Application) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/invoice", invoiceRouter);
}

export default routerApi;
