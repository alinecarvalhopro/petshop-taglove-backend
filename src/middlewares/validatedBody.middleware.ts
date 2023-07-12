import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

const validatedBody =
  (schema: ZodTypeAny) =>
  (request: Request, response: Response, next: NextFunction): void => {
    request.body = schema.parse(request.body);

    return next();
  };

export { validatedBody };
