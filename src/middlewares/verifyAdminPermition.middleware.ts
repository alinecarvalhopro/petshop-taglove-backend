import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/App.error";

const verifyAdminPermission = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const { admin } = response.locals.decoded;

  if (admin) return next();

  if (!admin) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};

export { verifyAdminPermission };
