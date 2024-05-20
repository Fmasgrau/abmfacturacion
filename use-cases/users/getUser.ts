import { Request, Response } from "express";
import { getUserService } from "../../services/userService";

export const getUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const userEmail = req.params.email;
  try {
    const user = await getUserService(userEmail);
    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }
    res.status(200).json(user);
  } catch (error: any) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
