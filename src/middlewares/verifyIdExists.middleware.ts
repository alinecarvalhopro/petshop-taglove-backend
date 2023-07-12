import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/App.error";
import { User } from "../entities/User.entity";
import userRepository from "../repositories/user.repository";

const verifyIdExists = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const id: number = parseInt(request.params.id);

  const foundEntity: User | null = await userRepository.findOneBy({ id });
  if (!foundEntity) throw new AppError("User not found", 404);

  response.locals = { ...response.locals, foundEntity };

  return next();
};

export { verifyIdExists };
