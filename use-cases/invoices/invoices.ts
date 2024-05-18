import { CreateInvoice, GetInvoiceResponse } from "./dto";

export class InvoiceService {
  invoice: GetInvoiceResponse[];

  constructor() {
    this.invoice = [{
      id: "1",
      client_id: "1",
      total: 100,
      createdAt: new Date(),
      items: [{
        id: "1",
        invoice_id: "1",
        product_id: "1",
        quantity: 1,
        price: 100
      }]
    },
    {
      id: "2",
      client_id: "2",
      total: 200,
      createdAt: new Date(),
      items: [{
        id: "2",
        invoice_id: "2",
        product_id: "2",
        quantity: 2,
        price: 100
      }]
    },
    {
      id: "3",
      client_id: "3",
      total: 300,
      createdAt: new Date(),
      items: [{
        id: "3",
        invoice_id: "3",
        product_id: "3",
        quantity: 3,
        price: 100
      }]
    }]
  }

  async createInvoice(invoice: CreateInvoice): Promise<GetInvoiceResponse> {
    return this.invoice[0];
  }

  async getInvoiceById(id: string): Promise<GetInvoiceResponse> {
    return this.invoice[0];
  }

  async getInvoices(): Promise<GetInvoiceResponse[]> {
    return this.invoice;
}
}
