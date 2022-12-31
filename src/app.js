import express from "express";
import TaskRoutes from "./routes/task";
import cors from "cors";
import morgan from "morgan";
const app = express();
app.set('port', process.env.PORT || 3000)
//midelwares
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
const corsOptions={};
app.use(cors(corsOptions));
//Routes
app.use('/api/tasks', TaskRoutes);

export default app;