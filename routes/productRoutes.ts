import { Router } from "express";

import validationMiddleware from "../middleware/validationMiddleware";
import { createProduct } from "../use-cases/products/createProduct";
import { deleteProduct } from "../use-cases/products/deleteProduct";
import { getProduct } from "../use-cases/products/getProduct";
import { getProducts } from "../use-cases/products/getProducts";
import { updateProduct } from "../use-cases/products/updateProduct";
import productValidator from "../validators/productValidator";
import { authMiddleware } from "../middleware/authMiddleware";
import requestsValidator from "../validators/requestsValidator";
import { validateParams } from "../middleware/paramsValidatorMiddleware";

const router = Router();

router.post(
  "/",
  authMiddleware,
  validationMiddleware(productValidator.create),
  createProduct,
);
router.get(
  "/",
  authMiddleware,
  validateParams(requestsValidator.getAll),
  getProducts,
);
router.get("/:id", authMiddleware, getProduct);
router.patch(
  "/:id",
  authMiddleware,
  validationMiddleware(productValidator.update),
  updateProduct,
);
router.delete("/:id", authMiddleware, deleteProduct);

export default router;
