import { Request, Response } from "express";
import { getClientService } from "../../services/clientService";
import { getInvoiceService } from "../../services/invoiceService";

export const getInvoice = async (
  req: Request,
  res: Response
): Promise<void> => {
  const invoiceId = parseInt(req.params.id, 10);
  try {
    const invoice = await getInvoiceService(invoiceId);
    if (!invoice) {
      res.status(404).json({ error: "Invoice not found" });
      return;
    }
    res.status(200).json(invoice);
  } catch (error: any) {
    console.error("Error fetching invoice:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
