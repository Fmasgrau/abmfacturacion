import { Request, Response } from "express";
import { updateClientService } from "../../services/clientService";

export const updateClient = async (
  req: Request,
  res: Response
): Promise<void> => {
  const clientId = parseInt(req.params.id, 10); // Assuming id is a number
  const { name, email } = req.body;
  try {
    const updatedClient = await updateClientService(clientId, name, email);
    if (!updatedClient) {
      res.status(404).json({ error: "Client not found" });
      return;
    }
    res.status(200).json(updatedClient);
  } catch (error: any) {
    let statusCode = 500;
    let errorMessage = "Internal Server Error";

    if (error.name === "SequelizeUniqueConstraintError") {
      statusCode = 400; // Bad Request
      errorMessage = "Email already exists";
    } else if (error.name === "SequelizeValidationError") {
      statusCode = 400; // Bad Request
      errorMessage = error.message || "Validation error";
    }
    res.status(statusCode).json({ error: errorMessage });
  }
};
