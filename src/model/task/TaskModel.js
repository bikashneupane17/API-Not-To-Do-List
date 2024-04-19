//db queries go inside this file
import TaskSchema from "./TaskSchema.js";

//Create
export const insertTask = (taskObj) => {
  const newTask = new TaskSchema(taskObj);
  return newTask()
    .save()
    .then(() => console.log("New task added"))
    .catch((error) => console.log(error));
};

//Read
export const findTask = (id) => {
  return TaskSchema.findById(id)
    .then(() => console.log("Task Updated"))
    .catch((error) => console.log(error));
};

//Update
export const updateTask = (id, updatedTask) => {
  return TaskSchema.updateOne(id, updatedTask)
    .then(() => console.log("Task Updated"))
    .catch((error) => console.log(error));
};

//Delete
export const deleteTask = (id) => {
  return TaskSchema.findByIdAndDelete(id)
    .then(() => console.log("Task Deleted"))
    .catch((error) => console.log(error));
};
