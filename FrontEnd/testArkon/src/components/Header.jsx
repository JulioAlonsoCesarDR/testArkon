import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div className="container d-flex pt-5 flex-column justify-content-center align-items-center" data-bs-spy="scroll">
      <div className="col-md-6 col-sm-12 bg-transparent border border-secondary border-2 rounded mb-3 p-3 text-center">
        <h3>Administrador de tareas</h3>
        <h6> Prueba técnica Akron Data </h6>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
