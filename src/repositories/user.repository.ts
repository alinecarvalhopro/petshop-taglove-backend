import { AppDataSource } from "../data-source";
import { User } from "../entities/User.entity";

export default AppDataSource.getRepository(User);
