import "express-async-errors";
import "reflect-metadata";
import express from "express";
import { usersRouter } from "./routers/users.router";
import { sessionRouter } from "./routers/session.router";
import { handleError } from "./middlewares/handleError.middleware";

const app = express();
app.use(express.json());

app.use("/users", usersRouter);
app.use("/login", sessionRouter);

app.use(handleError);

export { app };
