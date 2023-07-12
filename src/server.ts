import { app } from "./app";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then((): void => {
    console.log("Server running");

    const PORT: number = Number(process.env.PORT) || 3000;

    app.listen(PORT, () => {
      console.log("Server running");
    });
  })
  .catch((error: unknown): void => {
    console.log("Error during Data Source initialization", error);
  });
