import { User } from "../entities/User.entity";
import {
  TUserCreate,
  TUserRead,
  TUserReturn,
  TUserUpdate,
} from "../interfaces/user.interfaces";
import userRepository from "../repositories/user.repository";
import { userReadAllSchema, userReturnSchema } from "../schemas/user.schema";

const createUserServices = async (
  payload: TUserCreate
): Promise<TUserReturn> => {
  const user: User = userRepository.create(payload);
  await userRepository.save(user);
  return userReturnSchema.parse(user);
};

const readAllUsersServices = async (): Promise<TUserRead> => {
  return userReadAllSchema.parse(await userRepository.find());
};

const retrieveUserServices = async (id: number): Promise<TUserReturn> => {
  return userReturnSchema.parse(
    await userRepository.findOne({
      where: { id: id },
    })
  );
};

const updateUserServices = async (
  user: User,
  payload: TUserUpdate
): Promise<TUserReturn> => {
  const userUpdate: User = userRepository.create({ ...user, ...payload });
  await userRepository.save(userUpdate);
  return userReturnSchema.parse(userUpdate);
};

const deleteUserServices = async (user: User): Promise<void> => {
  await userRepository.softRemove(user);
};

export {
  createUserServices,
  readAllUsersServices,
  retrieveUserServices,
  updateUserServices,
  deleteUserServices,
};
