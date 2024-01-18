import express from "express";
import dotenv from "dotenv";
import conectDB from "./config/db.js";
import TaskRoutes from "./routes/taskRoutes.js  ";

const app = express();
app.use(express.json());
dotenv.config();
conectDB();

//Routing
app.use("/api/task", TaskRoutes);

// conection to DB
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
