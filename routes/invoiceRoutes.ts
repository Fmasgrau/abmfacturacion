import { Router } from "express";

import validationMiddleware from "../middleware/validationMiddleware";
import invoiceValidator from "../validators/invoiceValidator";
import { createInvoice } from "../use-cases/invoices/createInvoice";
import { getInvoice } from "../use-cases/invoices/getInvoice";
import { getInvoices } from "../use-cases/invoices/getInvoices";


const router = Router();

router.post("/", validationMiddleware(invoiceValidator.create), createInvoice);
router.get("/", getInvoices)
router.get("/:id", getInvoice);


export default router;
