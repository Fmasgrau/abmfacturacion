import { Request, Response } from "express";
import { EditProductDTO } from "../../entities/product";
import { updateProductService } from "../../services/productService";

export const updateProduct = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const productId = parseInt(req.params.id, 10);
  const { name, price }: EditProductDTO = req.body;
  try {
    const updateProduct = await updateProductService({
      id: productId,
      name,
      price,
    });
    if (!updateProduct) {
      res.status(404).json({ error: "Product not found" });
      return;
    }
    res.status(200).json(updateProduct);
  } catch (error: any) {
    let statusCode = 500;
    let errorMessage = "Internal Server Error";

    if (error.name === "SequelizeValidationError") {
      statusCode = 400; // Bad Request
      errorMessage = error.message || "Validation error";
    }
    res.status(statusCode).json({ error: errorMessage });
  }
};
