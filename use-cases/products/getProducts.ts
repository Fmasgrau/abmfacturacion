import { Request, Response } from "express";
import { getAllProductsService } from "../../services/productService";

export const getProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const products = await getAllProductsService();
    res.status(200).json(products);
  } catch (error: any) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
