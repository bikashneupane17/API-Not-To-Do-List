import express from "express";
import morgan from "morgan";
import taskRouter from "./src/routers/taskRouters.js";
import { connectMongo } from "./src/config/mondoDbConfig.js";

const PORT = process.env.port || 8000;

const app = express();

connectMongo();

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/v1/tasks", taskRouter);
//express.json() coverts request data to object which can be used by server

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server running at http://localhost:${PORT}`);
});
