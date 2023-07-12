import { Router } from "express";
import { validatedBody } from "../middlewares/validatedBody.middleware";
import {
  userCreateSchema,
  userUpdateSchemaRequest,
} from "../schemas/user.schema";
import { verifyUniqueEmail } from "../middlewares/verifyUniqueEmail.middleware";
import {
  createUserController,
  deleteUserController,
  readAllUsersController,
  retrieveUserController,
  updateUserController,
} from "../controllers/user.controllers";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { verifyIdExists } from "../middlewares/verifyIdExists.middleware";
import { verifyAdminOrOwnerPermission } from "../middlewares/verifyAdminOrOwnerPermition.middleware";
import { verifyAdminPermission } from "../middlewares/verifyAdminPermition.middleware";

const usersRouter: Router = Router();

usersRouter.post(
  "",
  validatedBody(userCreateSchema),
  verifyUniqueEmail,
  createUserController
);

usersRouter.get("", verifyToken, verifyAdminPermission, readAllUsersController);

usersRouter.use("/:id", verifyIdExists, verifyToken);

usersRouter.get("/:id", retrieveUserController);

usersRouter.patch(
  "/:id",
  validatedBody(userUpdateSchemaRequest),
  verifyAdminOrOwnerPermission,
  verifyUniqueEmail,
  updateUserController
);

usersRouter.delete("/:id", verifyAdminOrOwnerPermission, deleteUserController);

export { usersRouter };
