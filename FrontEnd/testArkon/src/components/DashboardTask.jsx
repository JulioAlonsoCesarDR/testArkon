import { useContext, useEffect } from "react";
import { TaskContext } from "./../context/TaskContext";
import ListTask from "./ListTask";
import { Link } from "react-router-dom";

const DashboardTask = () => {
  const apiUrl = import.meta.env.VITE_BACKEND_URL;

  const { saveListTask } = useContext(TaskContext);

  useEffect(() => {
    fetch(`${apiUrl}/api/task`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => saveListTask(data))
      .catch((error) =>
        console.error("There was a problem with the fetch operation:", error)
      );
  }, []);

  return (
    <>
      <Link to="/task" className="btn btn-secondary">
        Crear nueva tarea
      </Link>
      <div className="col-md-12 col-12">
        <div className="col-md-12 d-none d-sm-flex text-center">
          <div className="col-md-3">Nombre</div>
          <div className="col-md-3">Descripción</div>
          <div className="col-md-3">Progreso</div>
          <div className="col-md-3">Acciones</div>
        </div>
        <ListTask />
      </div>
    </>
  );
};

export default DashboardTask;
