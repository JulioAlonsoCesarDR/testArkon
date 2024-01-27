import { useState, createContext } from "react";

export const TaskContext = createContext();
/* Estado global de la "Tarea" */
const StateTask = ({ children }) => {
  const [task, setTask] = useState({
    _id:'',
    name: "",
    description: "",
    status: "",
    state: false,
    minutes:0,
    hours:0,
  });

  const saveTask = (field, value) =>{ setTask({ ...task, [field]: value })};

  const updateTask = (task) => setTask(task);

  const [listTask, setListTask] = useState([]);

  const saveListTask = (listTask) => setListTask(listTask);

  return (
    <TaskContext.Provider
      value={{
        task,
        listTask,
        saveTask,
        saveListTask,
        updateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default StateTask;
