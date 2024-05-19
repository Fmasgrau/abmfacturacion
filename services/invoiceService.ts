import { CreateInvoiceDto } from "../entities/invoice";
import Client from "../models/clients.model";
import Invoices from "../models/invoice.model";
import InvoiceItems from "../models/invoiceItems.model";
import Product from "../models/product.model";

export const createInvoiceService = async ({
  client_id,
  total,
  transaction
}: CreateInvoiceDto) => {
  return await Invoices.create({ client_id, total }, {transaction});
};

export const getInvoiceService = async (id: number) => {
  return await Invoices.findByPk(id);
};

export const getAllInvoicesService = async () => {
  return await Invoices.findAll();
};

export const getAllInvoicesWithDetails = async () => {
  return await Invoices.findAll({
    include: [
      {
        model: Client,
        attributes: ['id', 'name']
      },
      {
        model: InvoiceItems,
        include: [
          {
            model: Product,
            attributes: ['id', 'name', 'price']
          }
        ]
      }
    ]
  });
};
