import { Router } from "express";

import validationMiddleware from "../middleware/validationMiddleware";
import invoiceValidator from "../validators/invoiceValidator";
import { createInvoice } from "../use-cases/invoices/createInvoice";
import { getInvoice } from "../use-cases/invoices/getInvoice";
import { getInvoices } from "../use-cases/invoices/getInvoices";
import { getAllInvoicesDetails } from "../use-cases/invoices/getAllInvoicesWithItems";
import { authMiddleware } from "../middleware/authMiddleware";
import { validateParams } from "../middleware/paramsValidatorMiddleware";
import requestsValidator from "../validators/requestsValidator";

const router = Router();

router.post(
  "/",
  authMiddleware,
  validationMiddleware(invoiceValidator.create),
  createInvoice,
);
router.get("/", authMiddleware, validateParams(requestsValidator.getAll), getInvoices);
router.get("/details", authMiddleware, validateParams(requestsValidator.getAll),getAllInvoicesDetails);
router.get("/:id", authMiddleware, getInvoice);

export default router;
