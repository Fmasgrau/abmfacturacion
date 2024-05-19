
import { CreateInvoiceItemDto } from "../entities/invoiceItems";
import InvoiceItems from "../models/invoiceItems.model";



export const createInvoiceItemService = async ({
  invoice_id,
  product_id,
  quantity,
  price,
}: CreateInvoiceItemDto) => {
  return await InvoiceItems.create({ invoice_id, product_id, quantity, price });
};
