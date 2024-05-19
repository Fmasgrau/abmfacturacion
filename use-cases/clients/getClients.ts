import { Request, Response } from "express";
import { getAllClientsService } from "../../services/clientService";

export const getClients = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const clients = await getAllClientsService();
    res.status(200).json(clients);
  } catch (error: any) {
    console.error("Error fetching clients:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
