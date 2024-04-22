import express from "express";
import {
  getTask,
  insertTask,
  updateTask,
  deleteTask,
} from "../model/task/TaskModel.js";

// import { idGenerator } from "../utils.js";

const router = express.Router();

// let fakeDB = [];

router.get("/", async (req, res) => {
  console.log(req.body);
  const tasks = await getTask();
  res.json({
    message: "From Router get",
    tasks,
  });
});

router.post("/", async (req, res) => {
  try {
    const result = await insertTask(req.body);
    result?._id
      ? res.json({
          message: "From Router post",
          result,
        })
      : res.json({
          message: "Failed to add new data",
        });
  } catch (error) {
    console.log(error);
  }
});

// router.post("/", (req, res) => {
//   const id = idGenerator();
//   fakeDB.push({ ...req.body, id });
//   res.json({
//     message: "From Router post",
//   });
// });

// update task
router.patch("/", async (req, res) => {
  try {
    const result = await updateTask(req.body);

    result?._id
      ? res.json({
          message: "Your task has been updated",
          result,
        })
      : res.json({
          message: "Your task update failed",
        });
  } catch (error) {
    res.send(500).json({
      messgae: "Something went wrong, try again later",
    });
  }
});

//delete task
router.delete("/:_id", async (req, res) => {
  try {
    const _id = req.body;

    console.log(_id);

    const result = await deleteTask(_id);

    result?._id
      ? res.json({
          message: "Your task has been deleted",
        })
      : res.json({
          message: "Unable to delete, try again later",
        });
  } catch (error) {
    res.send(500).json({
      messgae: "Something went wrong, try again later",
    });
  }
});

export default router;
