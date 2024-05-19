import { Request, Response } from "express";
import { deleteClientService } from "../../services/clientService";

export const deleteClient = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const clientId = parseInt(req.params.id, 10); // Assuming id is a number
  try {
    const deletedClient = await deleteClientService(clientId);
    if (!deletedClient) {
      res.status(404).json({ error: "Client not found" });
      return;
    }
    res.status(200).json({ message: "Client deleted" });
  } catch (error: any) {
    console.error("Error deleting client:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
