import { Request, Response } from "express";
import { createClientService } from "../../services/clientService";

export const createClient = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { name, email } = req.body;
  try {
    const client = await createClientService(name, email);
    res.status(201).json(client);
  } catch (error: any) {
    // Determine the status code and message to send back
    let statusCode = 500;
    let errorMessage = "Internal Server Error";

    if (error.name === "SequelizeUniqueConstraintError") {
      statusCode = 400; // Bad Request
      errorMessage = "Email already exists";
    } else if (error.name === "SequelizeValidationError") {
      statusCode = 400; // Bad Request
      errorMessage = error.message || "Validation error";
    }

    // Send response with appropriate status code and error message

    res
      .status(statusCode)
      .json({ error: error.message, details: errorMessage });
  }
};
