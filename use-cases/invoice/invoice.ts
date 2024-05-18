import { CreateInvoice, GetInvoiceResponse } from "./dto";

export class InvoiceService {
  invoice: GetInvoiceResponse[];

  constructor() {
    this.invoice = [{
      id: "123",
      number: "INV-123",
      issueDate: new Date(),
      dueDate: new Date(),
      totalAmount: 100,
      customer: {
        customerId: "123",
        name: "John Doe",
        address: "123 Main St",
      },
      items: [
        {
          productId: "123",
          productName: "Product 1",
          quantity: 1,
          unitPrice: 100,
          subtotal: 100,
        },
      ],
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
