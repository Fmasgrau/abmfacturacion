import { CreateInvoice } from "../entities/invoice";
import Invoices from "../models/invoice.model";

export const createInvoiceService = async ({
  client_id,
  total,
  invoiceItems,
}: CreateInvoice) => {
  return await Invoices.create({ client_id, total, invoiceItems });
};

export const getInvoiceService = async (id: number) => {
  return await Invoices.findByPk(id);
};

export const getAllInvoicesService = async () => {
  return await Invoices.findAll();
};
