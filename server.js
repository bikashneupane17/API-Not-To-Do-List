import express from "express";
import morgan from "morgan";

const PORT = process.env.port || 8000;

const app = express();
//middlewares
app.use(morgan("dev"));

app.use("/", (req, res) => {
  res.json({
    message: "aaa",
  });
});

//run the server
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server running at http://localhost:${PORT}`);
});
