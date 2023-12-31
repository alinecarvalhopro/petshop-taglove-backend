import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/App.error";
import { verify } from "jsonwebtoken";

const verifyToken = (
  request: Request,
  response: Response,
  next: NextFunction
): void => {
  const authorization: string | undefined = request.headers.authorization;
  if (!authorization) throw new AppError("Missing bearer token", 401);

  const token: string = authorization.split(" ")[1];

  verify(token, process.env.SECRET_KEY!, (error, decoded) => {
    if (error) throw new AppError(error.message, 401);
    response.locals = { ...response.locals, decoded };
  });

  return next();
};

export { verifyToken };
