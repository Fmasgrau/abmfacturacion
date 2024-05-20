import { Request, Response } from "express";
import { getUserService } from "../../services/userService";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET;

export const login = async (req: Request, res: Response): Promise<void> => {

  try {
    const { email, password } = req.body;
    const user = await getUserService(email);

    if (!user) {
      throw new Error("User not found");
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      throw new Error("Invalid password");
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      secret as string,
      {
        expiresIn: "1h",
      },
    );

    res.status(200).json({token});
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
