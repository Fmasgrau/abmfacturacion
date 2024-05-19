import { Request, Response } from "express";
import { getAllInvoicesService } from "../../services/invoiceService";

export const getInvoices = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const invoices = await getAllInvoicesService();
    res.status(200).json(invoices);
  } catch (error: any) {
    console.error("Error fetching invoices:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
