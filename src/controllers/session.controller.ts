import { Request, Response } from "express";
import { TSessionReturn } from "../interfaces/session.interfaces";
import { createSession } from "../services/session.service";

const createSessionController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const token: TSessionReturn = await createSession(request.body);
  return response.status(200).json(token);
};

export { createSessionController };
