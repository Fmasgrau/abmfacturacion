import { Request, Response } from "express";
import { createInvoiceService } from "../../services/invoiceService";
import { getClientService } from "../../services/clientService";

export const createInvoice = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { client_id, total, invoiceItems } = req.body;
  try {
    const isClientExist = await getClientService(client_id);
    if (!isClientExist) {
      res.status(404).json({ error: "Client not found" });
      return;
    }
    const client = await createInvoiceService({
      client_id,
      total,
      invoiceItems,
    });
    res.status(201).json(client);
  } catch (error: any) {

    let statusCode = 500;
    let errorMessage = "Internal Server Error";

    if (error.name === "SequelizeUniqueConstraintError") {
      statusCode = 400;
      errorMessage = "Email already exists";
    } else if (error.name === "SequelizeValidationError") {
      statusCode = 400;
      errorMessage = error.message || "Validation error";
    }

    res
      .status(statusCode)
      .json({ error: error.message, details: errorMessage });
  }
};
