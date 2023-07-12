import { NextFunction, Request, Response } from "express";
import { TUserRepository } from "../interfaces/user.interfaces";
import { AppDataSource } from "../data-source";
import { User } from "../entities/User.entity";
import { AppError } from "../errors/App.error";

const verifyUniqueEmail = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const { email } = request.body;

  const repository: TUserRepository = AppDataSource.getRepository(User);

  if (email) {
    const foundEmail = await repository.findOneBy({ email: email });
    if (foundEmail) throw new AppError("Email already exists", 409);
  }

  return next();
};

export { verifyUniqueEmail };
