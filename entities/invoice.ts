import { Transaction } from "sequelize";

export interface CreateInvoiceDto {
  client_id: number;
  total: number;
  transaction: Transaction
}

export interface CreateInvoiceWithDianDto {
  isFail: boolean;
}
