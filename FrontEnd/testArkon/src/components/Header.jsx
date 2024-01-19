import { Outlet } from "react-router-dom";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";

const Header = () => {
  return (
    <div className="container d-flex vh-100  flex-column justify-content-center align-items-center">
      <div className=" w-50 bg-transparent border border-secondary border-2 rounded mb-3 p-3 text-center">
        <h3>Tareas</h3>
        <h6>Crea, Edita, Elimina, o comienza una tarea </h6>
        <div className="mt-2 " color="secondary">
          <div className="input-group my-3">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar Tarea"
              aria-label="Buscar Tarea"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-text">
                    <IconButton
                      onClick={() => {}}
                      aria-label="toggle password visibility"
                    >
                      <PersonSearchIcon />
                    </IconButton>
                  </div>
            </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
