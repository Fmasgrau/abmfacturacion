import { Request, Response } from "express";
import {  getAllInvoicesWithDetails } from "../../services/invoiceService";

export const getAllInvoicesDetails = async (req: Request, res: Response) => {
  try {
    const invoices = await getAllInvoicesWithDetails();
    res.status(200).json(invoices);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
