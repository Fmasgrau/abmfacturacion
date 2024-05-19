import { Request, Response } from "express";
import { deleteProductService } from "../../services/productService";

export const deleteProduct = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const productId = parseInt(req.params.id, 10);
  try {
    const deleteProduct = await deleteProductService(productId);
    if (!deleteProduct) {
      res.status(404).json({ error: "Product not found" });
      return;
    }
    res.status(200).json({ message: "Product deleted" });
  } catch (error: any) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
