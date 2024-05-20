import { Request, Response } from "express";
import { CreateUserDTO } from "../../entities/user";
import { createUserService } from "../../services/userService";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET;

export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password }: CreateUserDTO = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await createUserService({
      email,
      password: hashedPassword,
    });
    const token = jwt.sign({ id: newUser.id, email: newUser.email }, secret as string, {
      expiresIn: "1h",
    });

    res.status(200).json({ message: "User created successfully" });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
