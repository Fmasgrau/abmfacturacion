export interface CreateInvoice {
  number: string;
  issueDate: Date;
  dueDate: Date;
  totalAmount: number;
  customer: {
    customerId: string;
  };
  items: Array<{
    productId: string;
    quantity: number;
  }>;
}

export interface GetInvoiceResponse {
  id: string;
  number: string;
  issueDate: Date;
  dueDate: Date;
  totalAmount: number;
  customer: {
    customerId: string;
    name: string;
    address: string;
  };
  items: Array<{
    productId: string;
    productName: string;
    quantity: number;
    unitPrice: number;
    subtotal: number;
  }>;
}
