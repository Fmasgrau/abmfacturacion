import { Request, Response } from "express";
import { getAllInvoicesWithDetails } from "../../services/invoiceService";

export const getAllInvoicesDetails = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const offset = (page - 1) * limit;
  try {
    const { count, rows } = await getAllInvoicesWithDetails({ limit, offset });
    const invoices = {
      results: rows,
      totalItems: count,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    };
    res.status(200).json(invoices);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
