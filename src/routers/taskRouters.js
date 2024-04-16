import express from "express";
import { insertTask } from "../model/task/TaskModel.js";

// import { idGenerator } from "../utils.js";

const router = express.Router();

// let fakeDB = [];

router.get("/", (req, res) => {
  console.log(req.body);
  res.json({
    message: "From Router get",
  });
});

router.post("/", async (req, res) => {
  try {
    const result = await insertTask(req.body);
    result?._id
      ? res.json({
          message: "From Router post",
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

//update task
router.patch("/", (req, res) => {
  const { id, type } = req.body;
  fakeDB = fakeDB.map((item) => {
    if (item.id === id) {
      return { ...item, type }; //item.type === type
    }
    return item;
  });

  res.json({
    message: "Your task has been updated",
  });
});

//delete task
router.delete("/", (req, res) => {
  const { id } = req.body;
  fakeDB = fakeDB.filter((item) => item.id !== id);
  res.json({
    message: "Your task has been deleted",
  });
});

export default router;
