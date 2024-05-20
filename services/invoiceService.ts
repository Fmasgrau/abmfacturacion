import { CreateInvoiceDto } from "../entities/invoice";
import { RequestPaginatedParams } from "../entities/request";
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

export const getAllInvoicesService = async ({limit, offset} : RequestPaginatedParams) => {
  return await Invoices.findAndCountAll({limit, offset});
};

export const getAllInvoicesWithDetails = async ({limit, offset} : RequestPaginatedParams) => {
  return await Invoices.findAndCountAll({
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
    ],
    limit,
    offset
  });
};
