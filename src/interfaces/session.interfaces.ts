import { z } from "zod";
import { sessionSchema } from "../schemas/session.schema";

type TSessionCreate = z.infer<typeof sessionSchema>;
type TSessionReturn = { token: string };

export { TSessionCreate, TSessionReturn };
