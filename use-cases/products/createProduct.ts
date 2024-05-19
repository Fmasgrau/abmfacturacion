import { Request, Response } from "express";
import { CreateProductDTO } from "../../entities/product";
import { createProductService } from "../../services/productService";

export const createProduct = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { name, price }: CreateProductDTO = req.body;
  try {
    const product = await createProductService({ name, price });
    res.status(201).json(product);
  } catch (error: any) {
    let statusCode = 500;
    let errorMessage = "Internal Server Error";

    if (error.name === "SequelizeValidationError") {
      statusCode = 400;
      errorMessage = error.message || "Validation error";
    }

    res
      .status(statusCode)
      .json({ error: error.message, details: errorMessage });
  }
};
