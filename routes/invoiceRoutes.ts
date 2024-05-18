import { Router } from "express";
import { InvoiceService } from "../use-cases/invoices/invoices";


const router = Router();
const service = new InvoiceService();

router.post("/", (req: any, res: any) => {
  service.createInvoice(req.body);
  res.json({ message: "Invoice created" });
});
router.get("/", async (req: any, res: any) => {
  const invoiceResponse = await service.getInvoices();
  res.json(invoiceResponse);
});

export default router
