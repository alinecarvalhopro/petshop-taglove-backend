import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/App.error";

const verifyAdminOrOwnerPermission = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const { admin, sub } = response.locals.decoded;
  const { id } = request.params;

  if (admin) return next();

  if (Number(sub) !== Number(id)) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};

export { verifyAdminOrOwnerPermission };
