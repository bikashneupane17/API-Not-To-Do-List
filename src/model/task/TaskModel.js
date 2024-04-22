//db queries go inside this file
import TaskSchema from "./TaskSchema.js";

//Create
export const insertTask = (taskObj) => {
  return TaskSchema(taskObj).save();
};

//Read
export const getTask = () => {
  return TaskSchema.find();
};

//Update
export const updateTask = ({ _id, type }) => {
  return TaskSchema.findByIdAndUpdate(_id, { type }, { new: true });
};

//Delete
export const deleteTask = (_id) => {
  return TaskSchema.findByIdAndDelete(_id);
};
