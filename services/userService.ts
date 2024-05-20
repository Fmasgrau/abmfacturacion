import { CreateUserDTO } from "../entities/user";
import User from "../models/users.model";

export const createUserService = async ({ email, password }: CreateUserDTO) => {
  return await User.create({ email, password });
};

export const getUserService = async (email: string) => {
  return await User.findOne({ where: { email }, raw: true});
};


