import { z } from "zod";
import {
  userCreateSchema,
  userReadAllSchema,
  userReturnSchema,
} from "../schemas/user.schema";
import { DeepPartial, Repository } from "typeorm";
import { User } from "../entities/User.entity";

type TUserCreate = z.infer<typeof userCreateSchema>;
type TUserRead = z.infer<typeof userReadAllSchema>;
type TUserReturn = z.infer<typeof userReturnSchema>;
type TUserUpdate = DeepPartial<TUserCreate>;
type TUserRepository = Repository<User>;

export { TUserCreate, TUserRead, TUserReturn, TUserUpdate, TUserRepository };
