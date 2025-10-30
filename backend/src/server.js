import express from 'express'; 
import taskRoute from './routes/tasksRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import cors from "cors"
dotenv.config();
const PORT = process.env.PORT || 5001;
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/tasks", taskRoute);
connectDB().then(()=>{ // Start the server only after DB connection is established
    app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`);
});
})
