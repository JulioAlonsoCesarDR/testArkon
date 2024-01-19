import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ListTask from "./components/ListTask";
import Task from "./components/Task";
import StateTask from "./context/TaskContext";

function App() {
  return (
    /* Rutas para las diferentes vitas de la aplicación */
    <BrowserRouter>
      <StateTask>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<ListTask />} />
            <Route path="task/:id?" element={<Task />} />
          </Route>
        </Routes>
      </StateTask>
    </BrowserRouter>
  );
}

export default App;
