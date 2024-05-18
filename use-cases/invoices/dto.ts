export interface CreateInvoice {
  client_id: string;
  total: number;
  createdAt: Date;
  items: InvoiceItems[];
}

export interface InvoiceItems {
  id: string;
  invoice_id: string;
  product_id: string;
  quantity: number;
  price: number;
}

export interface GetInvoiceResponse {
  id: string;
  client_id: string;
  total: number;
  createdAt: Date;
  items: InvoiceItems[];
}
