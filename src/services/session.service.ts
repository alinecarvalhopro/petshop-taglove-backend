import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { AppError } from "../errors/App.error";
import { User } from "../entities/User.entity";
import {
  TSessionCreate,
  TSessionReturn,
} from "../interfaces/session.interfaces";
import userRepository from "../repositories/user.repository";

const createSession = async ({
  email,
  password,
}: TSessionCreate): Promise<TSessionReturn> => {
  const foundUser: User | null = await userRepository.findOneBy({ email });
  if (!foundUser) throw new AppError("Invalid credentials", 401);

  const samePwd: boolean = await compare(password, foundUser.password);
  if (!samePwd) throw new AppError("Invalid credentials", 401);

  const token: string = sign(
    { admin: foundUser.admin },
    process.env.SECRET_KEY!,
    { subject: foundUser.id.toString(), expiresIn: process.env.EXPIRES_IN! }
  );

  return { token };
};

export { createSession };