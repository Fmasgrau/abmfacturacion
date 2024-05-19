import { Request, Response } from "express";
import { getProductService } from "../../services/productService";

export const getProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  const productId = parseInt(req.params.id, 10);
  try {
    const product = await getProductService(productId);
    if (!product) {
      res.status(404).json({ error: "Product not found" });
      return;
    }
    res.status(200).json(product);
  } catch (error: any) {
    console.error("Error fetching product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
