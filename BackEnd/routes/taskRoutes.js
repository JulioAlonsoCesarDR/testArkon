import express from "express";

import {
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
  searchTask,
  getTasks,
} from "../controllers/taskController.js";

const router = express.Router();

router.route("/").get(getTasks).post(createTask);
router.route("/:id").get(getTaskById).put(updateTask).delete(deleteTask);
router.route("/search").post(searchTask)

export default router;
