import { Router } from "express";

import validationMiddleware from "../middleware/validationMiddleware";
import invoiceValidator from "../validators/invoiceValidator";
import { createInvoice } from "../use-cases/invoices/createInvoice";
import { getInvoice } from "../use-cases/invoices/getInvoice";
import { getInvoices } from "../use-cases/invoices/getInvoices";
import { getAllInvoicesDetails } from "../use-cases/invoices/getAllInvoicesWithItems";


const router = Router();

router.post("/", validationMiddleware(invoiceValidator.create), createInvoice);
router.get("/", getInvoices);
router.get("/details", getAllInvoicesDetails);
router.get("/:id", getInvoice);


export default router;
