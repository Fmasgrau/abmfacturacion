import { Router } from "express";

import validationMiddleware from "../middleware/validationMiddleware";
import invoiceValidator from "../validators/invoiceValidator";
import { createInvoice } from "../use-cases/invoices/createInvoice";
import { getInvoice } from "../use-cases/invoices/getInvoice";
import { getInvoices } from "../use-cases/invoices/getInvoices";
import { getAllInvoicesDetails } from "../use-cases/invoices/getAllInvoicesWithItems";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();

router.post(
  "/",
  authMiddleware,
  validationMiddleware(invoiceValidator.create),
  createInvoice,
);
router.get("/", authMiddleware, getInvoices);
router.get("/details", authMiddleware, getAllInvoicesDetails);
router.get("/:id", authMiddleware, getInvoice);

export default router;
