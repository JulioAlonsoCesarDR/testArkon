import { Outlet } from "react-router-dom";
import Countdown from "react-countdown";
import { TaskContext } from "./../context/TaskContext";
import { useContext, useEffect, useState } from "react";

const Header = () => {
  const { task } = useContext(TaskContext);
  const [showTimer, setShowTimer] = useState(false);
  useEffect(() => {
    if (task.start) {
      setShowTimer(task.start);
    }
    
  }, [task.start])
  
  return (
    <div
      className="container d-flex pt-5 flex-column justify-content-center align-items-center"
      data-bs-spy="scroll"
    >
      <div className="col-md-6 col-sm-12 bg-transparent border border-secondary border-2 rounded mb-3 p-3 text-center">
        <h3>Administrador de tareas</h3>
        <h6> Prueba técnica Akron Data </h6>
        <div>{showTimer && <Countdown date={Date.now() + task.timer} />}</div>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
