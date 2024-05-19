import { CreateInvoiceWithDianDto } from "../entities/invoice";


export const createInvoiceWithDian = async ({
  isFail,
}: CreateInvoiceWithDianDto) => {
  if (isFail) {
   return false
  }
  return true
};
