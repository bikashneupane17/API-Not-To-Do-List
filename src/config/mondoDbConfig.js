import mongoose from "mongoose";

// mongoose.connect("mongodb://localhost:27017/dentedTestDB")

export const connectMongo = () => {
  const uri = "mongodb://localhost:27017/ntdl";
  mongoose
    .connect(uri)
    .then(() => console.log("DB Connected"))
    .catch((error) => console.log(error));
};
