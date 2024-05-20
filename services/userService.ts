import { CreateUserDTO } from "../entities/user";
import User from "../models/users.model";

export const createUserService = async ({ email, password }: CreateUserDTO) => {
  return await User.create({ email, password });
};

export const getUserService = async (id: number) => {
  return await User.findByPk(id);
};
