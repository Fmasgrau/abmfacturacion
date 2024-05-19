import { Request, Response } from "express";
import { createInvoiceService } from "../../services/invoiceService";
import { getClientService } from "../../services/clientService";
import { createInvoiceItemService } from "../../services/invoiceItems";
import { CreateInvoiceItemDto } from "../../entities/invoiceItems";
import { sequelize } from "../../config/database";
import { createInvoiceWithDian } from "../../external-services/dianService";

export const createInvoice = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { client_id, total, invoiceItems, isFail } = req.body;
  const transaction = await sequelize.transaction();
  try {
    const isClientExist = await getClientService(client_id);
    if (!isClientExist) {
      res.status(404).json({ error: "Client not found" });
      return;
    }

     const externalResponse = await createInvoiceWithDian({isFail});
     if (!externalResponse) {
       throw new Error('Error calling external service');
     }

    const invoice = await createInvoiceService({
      client_id,
      total,
      transaction
    });

    if (invoice?.dataValues?.id && invoiceItems) {
      const invoiceItemPromises = invoiceItems.map((item: CreateInvoiceItemDto) => {
        return createInvoiceItemService({
          invoice_id: invoice?.dataValues?.id,
          product_id: item.product_id,
          quantity: item.quantity,
          price: item.price,
          transaction
        });
      });

      await Promise.all(invoiceItemPromises);
    }

    await transaction.commit();
    res.status(201).json(invoice);
  } catch (error: any) {
    let statusCode = 500;
    let errorMessage = "Internal Server Error";
    await transaction.rollback();
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
