import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import IconButton from "@mui/material/IconButton";
import Chip from "@mui/material/Chip";
import { useContext, useState } from "react";
import { TaskContext } from "./../context/TaskContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DialogAlert from "./DialogAlert";

const ListTask = (props) => {
  const { actionRefresh } = props;
  const apiUrl = import.meta.env.VITE_BACKEND_URL;
  const { listTask, updateTask } = useContext(TaskContext);
  const navigate = useNavigate();

  const handleEdit = async (task) => {
    console.log("task", task);
    await updateTask(task);
    navigate("/task");
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${apiUrl}/api/task/${id}`);
      console.log("Usuario creado:", response.data);
      setOpenDialog(false);
      actionRefresh();
    } catch (error) {
      console.error("Error al crear el usuario:", error);
    }
  };

  const [openDialog, setOpenDialog] = useState(false);
  const [task, setTask] = useState({
    name: "",
    id: "",
  });

  const OpenAlertDelete = (id, name) => {
    setOpenDialog(true);
    setTask({ id, name });
  };

  return (
    <>
      {listTask.map((task) => (
        <div
          key={task.id}
          className="col-md-12 d-block d-sm-flex align-items-center text-center border-bottom border-white py-3"
        >
          <div className="col-md-3 h6">{task.name}</div>
          <div className="col-md-3 d-block d-md-none mb-3">
            <u>Nombre</u>
          </div>
          <div className="col-md-3 h6">{task.description}</div>
          <div className="col-md-3 d-block d-md-none mb-3">
            <u>Descripción</u>
          </div>
          <div className="col-md-3">
            <Chip variant="outlined" color="info" label="Progreso" />
          </div>
          <div className="col-md-3 d-block d-md-none mb-3">
            <u>Progreso</u>
          </div>
          <div className="col-md-3 h6 d-flex flex-row align-items-center justify-content-center">
            <IconButton color="inherit" aria-label="Empezar tarea">
              <PlayCircleFilledIcon />
            </IconButton>
            <IconButton
              onClick={() => handleEdit(task)}
              color="inherit"
              aria-label="Editar tarea"
            >
              <BorderColorIcon />
            </IconButton>
            <IconButton
              onClick={() => OpenAlertDelete(task._id, task.name)}
              color="inherit"
              aria-label="Eliminar tarea"
            >
              <DeleteIcon />
            </IconButton>
          </div>
          <div className="col-md-3 d-block d-md-none">
            <u>Acciones</u>
          </div>
        </div>
      ))}
      <DialogAlert
        handleClose={() => setOpenDialog(false)}
        open={openDialog}
        nameTask={task.name}
        handleDelete={() => handleDelete(task.id)}
      />
    </>
  );
};

export default ListTask;
