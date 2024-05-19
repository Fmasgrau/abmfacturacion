import { CreateInvoiceItem } from "./invoiceItems";

export interface CreateInvoice {
  client_id: number;
  total: number;
  invoiceItems: CreateInvoiceItem[];
}
