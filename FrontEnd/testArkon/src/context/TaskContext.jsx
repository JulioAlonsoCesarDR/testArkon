import { useState, createContext } from "react";

export const TaskContext = createContext();

const StateTask = ({ children }) => {
  const [task, setTask] = useState({
    name: "",
    description: "",
    status: "",
    state: false

  });
  const saveTask =  (dataTask) => setTask(
    ...task, {
      name:dataTask.name,
      description: dataTask.description,
      status: dataTask.status,
      state: dataTask.state
    }
  )

  const [listTask, setListTask] = useState([]);
  const saveListTask = (listTask) => setListTask(listTask);

  return (
    <TaskContext.Provider
      value={{
        task,
        saveTask,
        listTask,
        saveListTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default StateTask;
