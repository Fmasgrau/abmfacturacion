import { Router } from "express";

import validationMiddleware from "../middleware/validationMiddleware";
import { createProduct } from "../use-cases/products/createProduct";
import { deleteProduct } from "../use-cases/products/deleteProduct";
import { getProduct } from "../use-cases/products/getProduct";
import { getProducts } from "../use-cases/products/getProducts";
import { updateProduct } from "../use-cases/products/updateProduct";
import productValidator from "../validators/productValidator";

const router = Router();

router.post("/", validationMiddleware(productValidator.create), createProduct);
router.get("/", getProducts);
router.get("/:id", getProduct);
router.patch(
  "/:id",
  validationMiddleware(productValidator.update),
  updateProduct,
);
router.delete("/:id", deleteProduct);

export default router;
