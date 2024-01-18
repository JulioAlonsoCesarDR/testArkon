import mongoose from "mongoose";

const taskSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    state: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);
export default Task;
