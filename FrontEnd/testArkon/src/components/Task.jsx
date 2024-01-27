import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useContext, useEffect, useState } from "react";
import { TaskContext } from "./../context/TaskContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Task = () => {
  const { task, saveTask, updateTask } = useContext(TaskContext);
  const [option, setOptions] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const navigate = useNavigate();

  const optionTime = [
    { value: "", label: "Selecciona una opción" },
    { value: "short", label: "Corta (30 min)" },
    { value: "medium", label: "Media (45 min)" },
    { value: "large", label: "Larga (60 min)" },
  ];
  const apiUrl = import.meta.env.VITE_BACKEND_URL;

  const handleCleanTask = () => {
    const task = {
      _id: "",
      name: "",
      description: "",
      status: "",
      state: false,
      minutes: 0,
      hours: 0,
    };
    updateTask(task);
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      name: task.name,
      description: task.description,
      state: false,
    };
    try {
      let response;
      if (task._id != "") {
        response = await axios.put(`${apiUrl}/api/task/${task._id}`, body);
      } else {
        response = await axios.post(`${apiUrl}/api/task`, body);
      }
      handleCleanTask();
      console.log("Usuario creado:", response.data);
    } catch (error) {
      console.error("Error al crear el usuario:", error);
    }
  };

  const setDefaultTime = () => {
    switch (option) {
      case "short":
        saveTask("minutes", 30);
        break;

      case "medium":
        saveTask("minutes", 45);

        break;

      case "large":
        saveTask("minutes", 60);

        break;

      default:
        saveTask("minutes", 0);
        break;
    }
  };
  useEffect(() => {
    setDefaultTime();
  }, [option]);

  useEffect(() => {
    if (task._id != "") {
      setIsUpdate(true);
    }
  }, [task]);

  useEffect(() => {
    if (task.hours == 2) {
      saveTask("minutes", 0);
      setOptions("");
    }
  }, [task.hours]);

  return (
    <>
      <div
        className="row border col-md-6 col-sm-12 p-3"
        style={{ background: "#7e9a96" }}
      >
        <div className="d-flex flex-row align-items-center justify-content-between">
          <h5>Crear nueva tarea</h5>
          <button onClick={handleCleanTask} className="btn btn-outline-danger">
            Cancelar
          </button>
        </div>
        <form className="d-flex flex-column" onSubmit={handleSubmit}>
          <TextField
            color="secondary"
            value={task.name}
            id="name"
            onChange={(e) => {
              saveTask(e.target.id, e.target.value);
            }}
            className="my-2"
            required
            label="Nombre de la tarea"
            variant="outlined"
          />
          <TextField
            color="secondary"
            value={task.description}
            id="description"
            onChange={(e) => {
              saveTask(e.target.id, e.target.value);
            }}
            className="my-2"
            required
            multiline
            label="Descripción"
            variant="outlined"
          />

          <div className="d-flex justify-content-between p-0 my-2 flex-column flex-sm-row">
            <TextField
              color="secondary"
              value={option}
              onChange={(e) => setOptions(e.target.value)}
              select
              label="Establecer tiempo"
              className="col-12 col-md-4"
              variant="outlined"
              disabled={task.hours >= 2}
            >
              {optionTime.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              color="secondary"
              value={task.hours}
              id={"hours"}
              onChange={(e) => {
                e.target.value <= 2 && saveTask(e.target.id, e.target.value);
              }}
              type="number"
              required
              className="mx-0 my-2 mx-md-2 my-md-0"
              label="Horas"
              variant="outlined"
              helperText="Maximo 2 horas"
              inputProps={{
                max: 2,
                step: 1,
                pattern: [12],
                min: 0,
              }}
            />
            <TextField
              color="secondary"
              value={task.minutes}
              id={"minutes"}
              onChange={(e) =>
                e.target.value <= 60 && saveTask(e.target.id, e.target.value)
              }
              type="number"
              required
              label="Minutos"
              variant="outlined"
              helperText="Maximo 60 min"
              disabled={task.hours >= 2}
              inputProps={{
                max: 60,
                min: 0,
              }}
            />
          </div>
          <div className="w-100 d-flex justify-content-center">
            <button type="submit" className="mx-5 btn btn-secondary">
              {isUpdate ? "Guardar cambios" : "Crear tarea"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Task;
