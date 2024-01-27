import { Outlet } from "react-router-dom";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import IconButton from "@mui/material/IconButton";

const Header = () => {
  return (
    <div className="container d-flex mt-5 flex-column justify-content-center align-items-center" data-bs-spy="scroll">
      <div className="col-md-6 col-sm-12 bg-transparent border border-secondary border-2 rounded mb-3 p-3 text-center">
        <h3>Administrador de tareas</h3>
        <h6> Prueba técnica Akron Data </h6>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
