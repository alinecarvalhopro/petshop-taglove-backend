import { Router } from "express";
import { validatedBody } from "../middlewares/validatedBody.middleware";
import { sessionSchema } from "../schemas/session.schema";
import { createSessionController } from "../controllers/session.controller";

const sessionRouter: Router = Router();

sessionRouter.post("", validatedBody(sessionSchema), createSessionController);

export { sessionRouter };
