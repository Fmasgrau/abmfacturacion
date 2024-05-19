import { Request, Response } from "express";
import { getClientService } from "../../services/clientService";

export const getClient = async (
  req: Request,
  res: Response
): Promise<void> => {
  const clientId = parseInt(req.params.id, 10); // Assuming id is a number
  try {
    const client = await getClientService(clientId);
    if (!client) {
      res.status(404).json({ error: "Client not found" });
      return;
    }
    res.status(200).json(client);
  } catch (error: any) {
    console.error("Error fetching client:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
