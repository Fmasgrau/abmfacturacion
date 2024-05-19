import { Transaction } from "sequelize";

export interface CreateInvoiceItemDto {
  invoice_id: number;
  product_id: number;
  quantity: number;
  price: number;
  transaction: Transaction;
}

