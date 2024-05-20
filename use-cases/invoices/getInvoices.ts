import { Request, Response } from "express";
import { getAllInvoicesService } from "../../services/invoiceService";

export const getInvoices = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const offset = (page - 1) * limit;
  try {
    const { count, rows } = await getAllInvoicesService({ limit, offset });
    const invoices = {
      results: rows,
      totalItems: count,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    };
    res.status(200).json(invoices);
  } catch (error: any) {
    console.error("Error fetching invoices:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
