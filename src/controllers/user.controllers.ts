import { Request, Response } from "express";
import {
  TUserRead,
  TUserReturn,
  TUserUpdate,
} from "../interfaces/user.interfaces";
import {
  createUserServices,
  deleteUserServices,
  readAllUsersServices,
  retrieveUserServices,
  updateUserServices,
} from "../services/user.services";

const createUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const user: TUserReturn = await createUserServices(request.body);
  return response.status(201).json(user);
};

const readAllUsersController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const users: TUserRead = await readAllUsersServices();
  return response.status(200).json(users);
};

const retrieveUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const id: number = Number(request.params.id);
  const user: TUserReturn = await retrieveUserServices(id);

  return response.status(200).json(user);
};

const updateUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userUpdate: TUserUpdate = await updateUserServices(
    response.locals.foundEntity,
    request.body
  );
  return response.status(200).json(userUpdate);
};

const deleteUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  await deleteUserServices(response.locals.foundEntity);
  return response.status(204).json();
};

export {
  createUserController,
  readAllUsersController,
  retrieveUserController,
  updateUserController,
  deleteUserController,
};
