import { Application } from "express";
import express from "express";
import invoiceRouter from "./invoiceRoutes";
import clientsRouter from "./clientRoutes";
import productRouter from "./productRoutes";
import authRoutes from "./authRoutes";


function routerApi(app: Application) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/invoices", invoiceRouter);
  router.use("/clients", clientsRouter);
  router.use("/products", productRouter);
  router.use("/users", authRoutes);
}

export default routerApi;
