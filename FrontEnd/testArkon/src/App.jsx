import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Task from "./components/Task";
import StateTask from "./context/TaskContext";
import DashboardTask from "./components/DashboardTask";

function App() {
  return (
    /* Rutas para las diferentes vitas de la aplicación */
    <BrowserRouter>
      <StateTask>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<DashboardTask />} />
            <Route path="task/:id?" element={<Task />} />
          </Route>
        </Routes>
      </StateTask>
    </BrowserRouter>
  );
}

export default App;
