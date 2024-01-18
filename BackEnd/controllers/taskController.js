import Task from "../models/Task.js";

const createTask = async (req, res) => {
  const task = new Task(req.body);
  try {
    const saveTask = await task.save();
    res.json(saveTask);
  } catch (error) {
    console.log(error);
  }
};

const getTasks = async (req, res) => {
  const task = await Task.find({});
  if (!task) {
    const error = new Error("No Encontrado");
    return res.status(404).json({ msg: error.message });
  }
  res.json(task);
};

const getTaskById = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  console.log('task', task)
  if (!task) {
    const error = new Error("No Encontrado");
    return res.status(404).json({ msg: error.message });
  }
  res.json(task);
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  if (!task) {
    const error = new Error("No Encontrado");
    return res.status(404).json({ msg: error.message });
  }
  task.name = req.body.name || task.name;
  task.description = req.body.description || task.description;
  task.state = req.body.state || task.state;
  try {
    const taskSave = await task.save();
    res.json(taskSave);
  } catch (error) {
    console.log(error);
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  if (!task) {
    const error = new Error("No Encontrado");
    return res.status(404).json({ msg: error.message });
  }
  try {
    await task.deleteOne();
    res.json({ msg: "Tarea Eliminada" });
  } catch (error) {
    console.log(error);
  }
};

const searchTask = async (req, res) => {
  const { name } = req.body;
  console.log('name', name)
  const task = await Task.findOne({ name });
  if (!task) {
    const error = new Error("La tarea no existe");
    return res.status(404).json({ msg: error.message });
  }
  res.json(task);
};

export { createTask, getTaskById, getTasks, updateTask, deleteTask, searchTask };
