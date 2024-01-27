import express from "express";
import dotenv from "dotenv";
import conectDB from "./config/db.js";
import TaskRoutes from "./routes/taskRoutes.js  ";
import cors from "cors";

const app = express();
app.use(express.json());
dotenv.config();
conectDB();

// Configure CORS
const whitelist = [process.env.FRONTEND_URL];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin)) {
      // get API
      callback(null, true);
    } else {
      // permission denied
      callback(new Error("Origin not allowed by CORS"));
    }
  },
};

app.use(cors());

//Routing
app.use("/api/task", TaskRoutes);

// conection to DB
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
